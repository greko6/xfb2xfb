# xfb2xfb (https://github.com/greko6/xfb2xfb)
by ex-Facebookers, for ex-Facebookers - a lookup table of similar tech &amp; services

No confidental projects, please.

Inspired by: [xg2xg](https://github.com/jhuangtw-dev/xg2xg), [Venkat V Note (private)](https://www.facebook.com/notes/ex-facebook-engineering/fb-like-tools-in-the-wild/1532125283574600/), [Martin K Post (private)](https://www.facebook.com/groups/exfaceeng/permalink/1531752523611876/)

## Technology

| Facebook Internal | Open Source / Real-World                 | Cloud / Commercial      | Notes          |
| ----------------- | ---------------------------------------- | ----------------------- | -------------- |
| BunnyLOL | [Jack Bunny](https://github.com/evensi/jack_bunny), [Gopherlol](https://github.com/markusdosch/gopherlol) | | |
| CaptureTheFlag  | [CaptureTheFlag](https://github.com/facebookarchive/fbctf) | 
| Codemod | [Codemod](https://github.com/facebook/codemod) |
| Configerator | [Protoconf](https://github.com/protoconf/protoconf) | | |
| Crash Reporting | [Firebase Crashlytics](https://firebase.google.com/docs/crashlytics) |
| Cubism  | [Cubism](https://square.github.io/cubism/) | 
| DataSwarm       | [AirFlow](https://airflow.apache.org/) |
| Deltoid | [Google Optimize](https://marketingplatform.google.com/about/optimize/) |
| FBNet | [NSOT](https://github.com/dropbox/nsot) | 
| FBNet fcr | [FCR](https://github.com/facebookincubator/FCR) |
| FBpush | [FBpush](https://github.com/facebookarchive/fbpush) | 
| FBTrace | [Jaegar](https://www.jaegertracing.io/), [Zipkin](https://zipkin.io/), [LightStep](https://lightstep.com/) |
| Entities        | [ent](https://entgo.io/docs/getting-started/) |
| Gatekeeper      | | [LaunchDarkly](https://launchdarkly.com/), [Google Optimize](https://marketingplatform.google.com/about/optimize/) | |
| GraphQL | [GraphQL](https://graphql.org/) | [Dgraph](https://dgraph.io) [Hashura](https://hasura.io/) | Hashura is graphQL on postgres in Haskell, Dgraph is graphQL with a scalable graph database with Raft in Go |
| Hive | [BigQuery](https://cloud.google.com/bigquery) |
| Internal FB Groups | [Workplace](https://www.facebook.com/workplace) |
| Internal Messenger | [Workplace](https://www.facebook.com/workplace), [Slack](https://www.slack.com) |
| NetNorad | [NetNorad](https://github.com/fbsamples/OpenNetNorad) | 
| ODS             | [SignalFX](https://www.signalfx.com/), [Datadog](https://www.datadoghq.com/), [Prometheus](https://prometheus.io/), [Splunk](https://www.splunk.com/), [Wavefront](https://www.wavefront.com/) |
| Open/R  | [Open/R](https://github.com/facebook/openr)   |
| pfff            | [pfff](https://github.com/returntocorp/pfff)
| Phabricator     | [Phabricator](https://github.com/phacility/phabricator) |
| Presto | [PrestoDB](https://prestodb.io/) |
| PSC | [Lattice](https://lattice.com/) |
| Pulse Surveys | [Peakon](https://peakon.com/) |
| Rageshake | [Instabug](https://instabug.com/) |
| Room Tools | [Zoom Rooms](https://www.zoom.us/docs/doc/Zoom_Rooms_Scheduling_Display.pdf), [Eventboard](https://www.teem.com/display-apps/teem-conference-room-display/) |
| Scuba | [Honeycomb](https://www.honeycomb.io/) (SaaS, exfb), [Interana](https://www.interana.com/), [Looker](https://looker.com/), [MemSQL](https://www.memsql.com/), [Snorkel](https://snorkel.logv.org/), [Superset+Druid](https://www.youtube.com/watch?v=W_Sp4jo1ACg) (yt), [LocustDB](https://github.com/cswinter/LocustDB), [InfluxDB+Grafana](https://grafana.com/docs/grafana/latest/features/datasources/influxdb/) |
| Scribe | [Apache Pulsar](https://pulsar.apache.org/), [Kafka](https://kafka.apache.org/), [Amazon Kinesis](https://aws.amazon.com/kinesis/) | 
| SI/Site Integrity | [Haxl](https://github.com/facebook/Haxl) | 
| Sitevar | [Consul.io](https://www.consul.io/) |
| TAO | [Neptune](https://aws.amazon.com/neptune/), [RedisGraph](https://oss.redislabs.com/redisgraph/), [dgraph](https://dgraph.io/), [Neo4j](https://neo4j.com/) | 
| Tasks | [Asana](https://asana.com/) , [Maniphest](https://github.com/phacility/phabricator) (inside Phabricator) | 
| TBGS | [Sourcegraph](https://about.sourcegraph.com/), [LiveGrep](https://github.com/livegrep/livegrep), [SilverSearcher](https://github.com/ggreer/the_silver_searcher) |
| TracerT | [TracerT](https://github.com/facebook/fbtracert) | 
| Tupperware | [Docker](https://www.docker.com/), [Kubernetes](https://kubernetes.io/) | [Nomad](https://www.nomadproject.io/)
| Thrift | [Thrift](https://github.com/apache/thrift) |
| Unicorn         | [Rockset](https://rockset.com/) |
| Unidash | [Grafana](https://www.grafana.com/), [Looker](https://looker.com/) |
| Workday | [Charlie HR](https://www.charliehr.com/), [Hibob](https://www.hibob.com/) |
| ZippyDB | [[Consul (Dgraph)](https://www.consul.io/) , [Badger](https://github.com/dgraph-io/badger) | Key-Value stores based on Raft which scale horizontally. Consul provides service discovery. |

## Scuba

Scuba provides deep dive analytics, especially into high cardinality data as opposed metrics/charts. Honeycomb.io is a commercial venture by xfb Charity Majors. 
