import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import { marked } from 'marked';

const root = new URL('../', import.meta.url);
const [markdown, template, styles] = await Promise.all([
  readFile(new URL('README.md', root), 'utf8'),
  readFile(new URL('site/template.html', root), 'utf8'),
  readFile(new URL('site/style.css', root), 'utf8'),
]);

const tokens = marked.lexer(markdown);
const section = tokens.findIndex(token => token.type === 'heading' && token.text === 'Technology');
if (section === -1) throw new Error('README.md has no Technology section.');
const content = tokens.slice(section + 1);
const nextHeading = content.findIndex(token => token.type === 'heading');
const table = content.slice(0, nextHeading === -1 ? undefined : nextHeading)
  .find(token => token.type === 'table');
if (!table) throw new Error('The Technology section has no Markdown table.');

let repository = process.env.GITHUB_REPOSITORY;
if (!repository) {
  try {
    const remote = execFileSync('git', ['remote', 'get-url', 'origin'], {
      cwd: root,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim();
    repository = remote.match(/github\.com[:/]([^/]+\/[^/]+?)(?:\.git)?\/?$/)?.[1];
  } catch {}
}
repository ||= 'greko6/xfb2xfb';
if (!/^[\w.-]+\/[\w.-]+$/.test(repository)) throw new Error('Invalid GitHub repository name.');

const html = marked.parser([table]).replaceAll('<th>', '<th scope="col">');
const replacements = {
  styles,
  table: html,
  count: String(table.rows.length),
  repository: `https://github.com/${repository}`,
};
const page = template.replace(/\{\{(styles|table|count|repository)\}\}/g, (_, key) => replacements[key]);
await mkdir(new URL('dist/', root), { recursive: true });
await writeFile(new URL('dist/index.html', root), page);
console.log(`Built dist/index.html with ${table.rows.length} entries from README.md.`);
