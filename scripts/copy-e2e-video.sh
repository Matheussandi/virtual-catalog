#!/usr/bin/env bash
set -euo pipefail

root="$(cd "$(dirname "$0")/.." && pwd)"
out="$root/docs/test-recordings"
webm="$out/catalog-e2e.webm"
mp4="$out/catalog-e2e.mp4"

cp "$root"/test-results/catalog-*/video.webm "$webm"
ffmpeg -y -i "$webm" -c:v libx264 -preset slow -crf 22 -c:a aac -b:a 128k -movflags +faststart "$mp4"
