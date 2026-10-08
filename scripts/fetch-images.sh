#!/bin/bash
# Fetch all B4Fire site images sequentially (avoids 429 rate limits), capture stdout JSON
set -u
OUT=/home/z/my-project/download/b4fire-img
mkdir -p "$OUT"
cd /tmp

fetch() {
  local query="$1" name="$2" count="$3"
  for attempt in 1 2 3; do
    if z-ai image-search -q "$query" --count "$count" --gl us --no-rank > "$OUT/$name.json" 2>/dev/null; then
      if grep -q '"success": true' "$OUT/$name.json"; then echo "OK: $name"; return 0; fi
    fi
    echo "retry($attempt): $name"; sleep 12
  done
  echo "FAIL: $name"
}

fetch "fire alarm control panel technician inspecting equipment" hero 3;  sleep 6
fetch "modern office building glass facade exterior" office 2;            sleep 6
fetch "industrial warehouse interior with storage racking" warehouse 2;   sleep 6
fetch "data center server room rows of racks" server 2;                   sleep 6
fetch "red fire extinguishers mounted on wall" exting 2;                  sleep 6
fetch "CCTV security camera mounted on building wall" cctv 2;             sleep 6
fetch "fingerprint scanner access control installed office door" bio 2;   sleep 6
fetch "shopping mall interior modern retail atrium" retail 2
echo "ALL DONE"
