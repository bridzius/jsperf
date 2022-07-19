# jsperf - JavaScript performance metrics for different versions of NodeJS

| Title | Item amount | Test label | Time (seconds) |
| ----- | ----------- | ---------- | -------------- |
| **NodeJS version: v18.4.0** ||||
| **tests/array_copy/array_from.mjs** | [0.1 million items] | {Array.from} | 2.0865219980478287 |
| **tests/array_copy/array_push.mjs** | [0.1 million items] | {Array.push} | 53.10018799453974 |
| **tests/array_loops/for.mjs** | [10 million items] | {for loop} | 27.989689998328686 |
| **tests/array_loops/for_each.mjs** | [10 million items] | {forEach} | 290.8729959949851 |
| **tests/array_loops/for_of.mjs** | [10 million items] | {for of} | 651.1411160007119 |
| **tests/array_mapping/tuples.mjs** | [10 million items] | {tuple enum} | 1857.5241379961371 |
| **tests/array_mapping/objects.mjs** | [10 million items] | {object enum} | 1829.786467000842 |
| **tests/object_values/for_in.mjs** | [1 million items] | {Object for in} | 499.88756699860096 |
| **tests/object_values/entries.mjs** | [1 million items] | {Object.entries forEach} | 1551.281782001257 |
| **tests/array_copy/array_rest.mjs** | [0.1 million items] | {Array rest parameters} | 59796.62404499948 |
| **NodeJS version: v17.9.1** ||||
| **tests/array_copy/array_from.mjs** | [0.1 million items] | {Array.from} | 2.2606690004467964 |
| **tests/array_copy/array_push.mjs** | [0.1 million items] | {Array.push} | 9.948223002254963 |
| **tests/array_loops/for.mjs** | [10 million items] | {for loop} | 8.178215995430946 |
| **tests/array_loops/for_each.mjs** | [10 million items] | {forEach} | 281.8118840008974 |
| **tests/array_loops/for_of.mjs** | [10 million items] | {for of} | 651.7577240020037 |
| **tests/array_mapping/objects.mjs** | [10 million items] | {object enum} | 1998.3166349977255 |
| **tests/array_mapping/tuples.mjs** | [10 million items] | {tuple enum} | 1979.1227380037308 |
| **tests/object_values/for_in.mjs** | [1 million items] | {Object for in} | 735.720178000629 |
| **tests/object_values/entries.mjs** | [1 million items] | {Object.entries forEach} | 1832.3682560026646 |
| **tests/array_copy/array_rest.mjs** | [0.1 million items] | {Array rest parameters} | 57758.79608800262 |
| **NodeJS version: v16.16.0** ||||
| **tests/array_copy/array_from.mjs** | [0.1 million items] | {Array.from} | 1.425257995724678 |
| **tests/array_copy/array_push.mjs** | [0.1 million items] | {Array.push} | 10.647883996367455 |
| **tests/array_loops/for.mjs** | [10 million items] | {for loop} | 16.99670200049877 |
| **tests/array_loops/for_each.mjs** | [10 million items] | {forEach} | 172.04197200387716 |
| **tests/array_loops/for_of.mjs** | [10 million items] | {for of} | 536.2313209995627 |
| **tests/array_mapping/tuples.mjs** | [10 million items] | {tuple enum} | 2324.8774250000715 |
| **tests/array_mapping/objects.mjs** | [10 million items] | {object enum} | 2154.518258996308 |
| **tests/object_values/for_in.mjs** | [1 million items] | {Object for in} | 959.684146001935 |
| **tests/object_values/entries.mjs** | [1 million items] | {Object.entries forEach} | 2174.2147639989853 |
| **tests/array_copy/array_rest.mjs** | [0.1 million items] | {Array rest parameters} | 57656.02234399319 |
