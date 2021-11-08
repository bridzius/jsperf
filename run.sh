#!/bin/bash

echo "### NodeJS version: $(node -v)"

prefix_md_list() {
	echo "$(echo "$1" | sed -e 's/^/- /')"
}

prefix_md_list "$(node array.mjs)"
prefix_md_list "$(node object.mjs)"


