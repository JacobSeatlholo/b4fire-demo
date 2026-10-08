#!/bin/bash
# Generate B4Fire website images with cohesive brand palette
set -u
OUT=/home/z/my-project/public/images
mkdir -p "$OUT"
STYLE="photorealistic professional corporate photography, dark navy blue and safety orange color palette, cinematic dramatic lighting, sharp focus, high quality, detailed, no text no watermark no logos"

gen() {
  local name="$1" size="$2" prompt="$3"
  for attempt in 1 2 3; do
    if z-ai image -p "$prompt, $STYLE" -o "$OUT/$name.jpg" -s "$size" > /dev/null 2>&1; then
      if [ -s "$OUT/$name.jpg" ]; then echo "OK: $name"; return 0; fi
    fi
    echo "retry($attempt): $name"; sleep 5
  done
  echo "FAIL: $name"
}

gen hero 1440x720 "fire safety engineer in high visibility jacket inspecting modern red fire alarm control panel inside commercial building at night, glowing indicator lights, industrial electrical room background"
gen portfolio-office 1152x864 "modern commercial office building interior lobby with sleek fire detection equipment and emergency lighting, glass and steel architecture"
gen portfolio-warehouse 1152x864 "large industrial warehouse interior with steel racking, fire sprinkler pipes along ceiling and fire extinguisher stations, wide angle"
gen portfolio-server 1152x864 "data center server room with rows of server racks, clean gas fire suppression nozzles on ceiling, cool blue and orange accent lighting"
gen portfolio-retail 1152x864 "modern shopping mall interior atrium with fire detection sprinklers and emergency exit signage, retail stores in background"
gen portfolio-access 1152x864 "biometric fingerprint access control reader mounted next to modern glass office door, professional security installation"
gen portfolio-perimeter 1152x864 "electric security fence with alarm posts around industrial perimeter at dusk, security lighting, CCTV camera on pole"
echo "ALL DONE"
