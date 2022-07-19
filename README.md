# jsperf - JavaScript performance metrics for different versions of NodeJS

| NodeJS version: v18.4.0 ||||
| ----- | ----- | ----- | ----- |
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
