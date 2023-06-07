# xfb2xfb (https://github.com/greko6/xfb2xfb)
by ex-Facebookers, for ex-Facebookers - a lookup table of similar tech &amp; services

No confidental projects, please.

Inspired by: [xg2xg](https://github.com/jhuangtw-dev/xg2xg), [Venkat V Note (private)](https://www.facebook.com/notes/ex-facebook-engineering/fb-like-tools-in-the-wild/1532125283574600/), [Martin K Post (private)](https://www.facebook.com/groups/exfaceeng/permalink/1531752523611876/)

## Technology

| Facebook Internal | Open Source / Real-World                 | Cloud / Commercial      | Notes          |
| ----------------- | ---------------------------------------- | ----------------------- | -------------- |
| Bento | [Zeppelin](https://zeppelin.apache.org/), [Jupyter](https://jupyter.org/) | [Databricks](https://databricks.com/) | |
| Buck | [Buck](https://buck.build/), [Pants](https://www.pantsbuild.org/docs), [Bazel](https://bazel.build/) | | |
| BunnyLOL | [Jack Bunny](https://github.com/evensi/jack_bunny), [Gopherlol](https://github.com/markusdosch/gopherlol) | | |
| CaptureTheFlag  | [CaptureTheFlag](https://github.com/facebookarchive/fbctf) | [Secure Code Warrior](https://www.securecodewarrior.com/products/tournaments)
| Codemod | [Codemod](https://github.com/facebook/codemod) |
| Configerator | [Protoconf](https://github.com/protoconf/protoconf) | | |
| Crash Reporting | [Firebase Crashlytics](https://firebase.google.com/docs/crashlytics), [sentry.io](https://sentry.io/from/crashlytics/) |
| Cubism  | [Cubism](https://square.github.io/cubism/) |
| DataSwarm       | [AirFlow](https://airflow.apache.org/) |
| Daiquery | [Jupyter](https://jupyter.org/) | [Databricks](https://www.databricks.com/) |
| Deltoid | [Growthbook](https://github.com/growthbook/growthbook) | [Statsig](https://www.statsig.com), [Google Optimize](https://marketingplatform.google.com/about/optimize/)|
| Dotsync | [Dotsync](https://github.com/dotphiles/dotsync) | | No native support for automatically saving/loading config changes |
| Eden / HG | [Sapling](https://sapling-scm.com/) | |
| FBLearner Flow | [TFX](https://www.tensorflow.org/tfx), [Metaflow](https://metaflow.org/), [Flyte](https://flyte.org/)|[Amazon SageMaker](https://aws.amazon.com/sagemaker/), [Azure Machine Learning](https://azure.microsoft.com/en-us/services/machine-learning/)|
| FBNet | [NSOT](https://github.com/dropbox/nsot) |
| FBNet fcr | [FCR](https://github.com/facebookincubator/FCR) |
| FBpush | [FBpush](https://github.com/facebookarchive/fbpush) |
| FBTrace | [Jaegar](https://www.jaegertracing.io/), [Zipkin](https://zipkin.io/), [LightStep](https://lightstep.com/) |
| FOQS | [Apache Pulsar](https://pulsar.apache.org/), [RabbitMQ](https://www.rabbitmq.com/) | [Google PubSub](https://cloud.google.com/pubsub), [Amazon SQS](https://aws.amazon.com/sqs/)| Similar to Iris, but more general. Used to support [FB's Async Tier](https://engineering.fb.com/2021/02/22/production-engineering/foqs-scaling-a-distributed-priority-queue/#:~:text=Async%20(Facebook%E2%80%99s%20asynchronous%20compute%20platform)).|
| Entities        | [ent](https://entgo.io/docs/getting-started/) |
| Excalidraw | [Excalidraw](https://excalidraw.com/)| |
| Gatekeeper, JustKnobs | [Growthbook](https://github.com/growthbook/growthbook),[Flag Smith](https://flagsmith.com/) | [LaunchDarkly](https://launchdarkly.com/), [Google Optimize](https://marketingplatform.google.com/about/optimize/), [Flag Smith](https://flagsmith.com/), [Statsig](https://www.statsig.com/) (SaaS, exfb) | |
| GraphQL | [GraphQL](https://graphql.org/) | [Dgraph](https://dgraph.io) [Hasura](https://hasura.io/) | Hasura is graphQL on postgres in Haskell, Dgraph is graphQL with a scalable graph database with Raft in Go |
| Hive | [Clickhouse](https://clickhouse.com/)| [BigQuery](https://cloud.google.com/bigquery) |
| Hipster | [Casbin](https://casbin.org/), [Keycloak](https://www.keycloak.org/) |
| iData | [Datahub](https://github.com/datahub-project/datahub) | [select star](https://www.selectstar.com/)|
| Internal FB Groups | | [Workplace](https://www.facebook.com/workplace), [Threads](https://threads.com/) (exfb) |
| Internal Messenger | | [Workplace](https://www.facebook.com/workplace), [Slack](https://www.slack.com), [Threads](https://threads.com/) (exfb), [Discord](https://discord.com/), [TeamChat](https://www.icewarp.com) |
| Internal Profiles | | [Pingboard](https://pingboard.com/) |
| Iris | [Apache Kafka](https://kafka.apache.org/) | [Google PubSub](https://cloud.google.com/pubsub), [Amazon SNS](https://aws.amazon.com/sNs/)| Similar to FOQS but heavier emphasis on [sending messages](https://engineering.fb.com/2014/10/09/production-engineering/building-mobile-first-infrastructure-for-messenger/).|
| Mercurial -> Git | [git branchless](https://github.com/arxanas/git-branchless), [hg-git](http://hg-git.github.io/) | | git branchless adds some of the features you know and love from Mercurial to git, or just keep using Mercurial in a git repo using hg-git |
| NetNorad | [NetNorad](https://github.com/fbsamples/OpenNetNorad) |
| ODS             | [Prometheus](https://prometheus.io/) | [SignalFX](https://www.signalfx.com/), [Datadog](https://www.datadoghq.com/), [Splunk](https://www.splunk.com/), [Wavefront](https://www.wavefront.com/) |
| Open/R  | [Open/R](https://github.com/facebook/openr)   |
| pfff            | [pfff](https://github.com/returntocorp/pfff)
| Phabricator     | [Phorge](https://we.phorge.it), [Graphite](https://graphite.dev), [Phabricator](https://phacility.com/phabricator/)| | Phabricator is no longer maintained [as of 2021](https://admin.phacility.com/phame/post/view/11/phacility_is_winding_down_operations/)|
| Presto | [Trino](https://trino.io), [PrestoDB](https://prestodb.io/) | [Starburst](https://starburst.io) | |
| PSC | | [Lattice](https://lattice.com/) |
| Pulse Surveys | | [Peakon](https://peakon.com/), [Glint](https://www.glintinc.com/) |
| Quip | [HedgeDoc](https://hedgedoc.org/) | [Quip](https://quip.com) | |
| Rageshake | [Instabug](https://instabug.com/) |
| Room Tools | | [Zoom Rooms](https://www.zoom.us/docs/doc/Zoom_Rooms_Scheduling_Display.pdf), [Eventboard](https://www.teem.com/display-apps/teem-conference-room-display/) |
| Scuba | [Superset+Rockset](https://rockset.com/docs/apache-superset/), [MemSQL](https://www.memsql.com/), [Snorkel](https://snorkel.logv.org/), [Superset+Druid](https://www.youtube.com/watch?v=W_Sp4jo1ACg) (yt), [LocustDB](https://github.com/cswinter/LocustDB), [InfluxDB+Grafana](https://grafana.com/docs/grafana/latest/features/datasources/influxdb/) | [Honeycomb](https://www.honeycomb.io/) (SaaS, exfb), [Interana](https://www.interana.com/), [Looker](https://looker.com/) |
| Scribe | [Apache Pulsar](https://pulsar.apache.org/), [Kafka](https://kafka.apache.org/), [Amazon Kinesis](https://aws.amazon.com/kinesis/) |
| SEV Manager | [Kintaba](https://kintaba.com) | [Blameless](https://www.blameless.com), [FireHydrant](https://firehydrant.io/), [Grafana Incident](https://grafana.com/blog/2022/02/02/announcing-grafana-incident-smart-incident-management-for-your-teams/), [Pager Duty](https://www.pagerduty.com), [Incident](https://incident.io/)
| SeRF | [Netbox](https://github.com/netbox-community/netbox), [Tinkerbell](https://github.com/tinkerbell/tink), [RacksDB](https://rackslab.io/en/solutions/racksdb) | | Physical inventory and IPAM |
| SI/Site Integrity | [Haxl](https://github.com/facebook/Haxl) |
| Sitevar | [Consul.io](https://www.consul.io/), [Etcd](https://www.etcd.io)|
| SRT (Single Review Tool) | | [LabelBox](https://labelbox.com/) |
| TAO | [Neptune](https://aws.amazon.com/neptune/), [RedisGraph](https://oss.redislabs.com/redisgraph/), [dgraph](https://dgraph.io/), [Neo4j](https://neo4j.com/) |
| Tasks | [Linear](https://linear.app/) , [Asana](https://asana.com/) , [Maniphest](https://we.phorge.it) (inside Phorge) |
| TBGS | [Sourcegraph](https://about.sourcegraph.com/), [LiveGrep](https://github.com/livegrep/livegrep), [SilverSearcher](https://github.com/ggreer/the_silver_searcher), [ripgrep](https://github.com/BurntSushi/ripgrep) |
| TracerT | [TracerT](https://github.com/facebook/fbtracert) |
| Tupperware | [Docker](https://www.docker.com/), [Podman](https://podman.io/), [Kubernetes](https://kubernetes.io/) | [Nomad](https://www.nomadproject.io/)
| Thrift | [GRPC](https://grpc.io/), [Thrift](https://github.com/apache/thrift), [ZeroMQ](https://zeromq.org/) |
| Unicorn         | [Rockset](https://rockset.com/) |
| Unidash | [Grafana](https://www.grafana.com/), [Metabase](https://www.metabase.com/) | [Looker](https://looker.com/), [Tableau](https://www.tableau.com/) |
| Working Set (VSCode Extention) | [Fildir](https://marketplace.visualstudio.com/items?itemName=diggyk.fildir), [Working Sets](https://marketplace.visualstudio.com/items?itemName=bernardop.working-sets) | | VSCode extensions to help you focus on specific files or directories in a monorepo |
| Workday | | [Workday](https://workday.com), [Charlie HR](https://www.charliehr.com/), [Hibob](https://www.hibob.com/) |
| Workplace | | [HumHub](https://www.humhub.com/), [Basecamp](https://basecamp.com/), [Whaller](https://whaller.com/) |
| ZippyDB | [Badger (Dgraph)](https://github.com/dgraph-io/badger) | [CockroachDB](https://www.cockroachlabs.com/) [Consul (Hashicorp)](https://www.consul.io/), [Etcd](https://www.etcd.io) | Key-Value stores based on Raft which scale horizontally. Cockroach is sharded. Consul provides service discovery. |
| CWS, Async workflow | [Temporal](https://temporal.io/), [Argo Workflows](https://argoproj.github.io/argo-workflows/) | [AWS Step Functions](https://docs.aws.amazon.com/step-functions/index.html), [Azure Logic Apps](https://learn.microsoft.com/en-us/azure/logic-apps/logic-apps-overview), [Google Cloud Workflows](https://cloud.google.com/workflows) | Frameworks for implementing complex, asynchronous workflows through coordinating steps with dependencies and error handling |

