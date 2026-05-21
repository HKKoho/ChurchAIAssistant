#!/usr/bin/env bash
# ============================================================
# install.sh  —  Church AI Pack v2.0.0 for Clawix
# Drop-in installer: copies skills + merges church.json
#
# Usage:
#   bash install.sh                     # clawix is ../clawix
#   bash install.sh /path/to/clawix     # explicit path
# ============================================================
set -e

CLAWIX_DIR="${1:-../clawix}"
HERE="$(cd "$(dirname "$0")" && pwd)"

echo ""
echo "✝️  Church AI Pack v2.0.0 — Clawix Installer"
echo "=============================================="
echo "Pack dir   : $HERE"
echo "Clawix dir : $CLAWIX_DIR"
echo ""

# ── 1. Validate Clawix ──────────────────────────────────────
if [ ! -f "$CLAWIX_DIR/package.json" ]; then
  echo "❌  Clawix not found at: $CLAWIX_DIR"
  echo "    Usage: bash install.sh /absolute/path/to/clawix"
  exit 1
fi
echo "✅  Clawix found"

# ── 2. Copy all 18 skill folders ────────────────────────────
BUILTIN="$CLAWIX_DIR/skills/builtin"
mkdir -p "$BUILTIN"

for dir in "$HERE/skills/builtin/"/*/; do
  name=$(basename "$dir")
  cp -r "$dir" "$BUILTIN/$name"
  echo "📁  $name"
done

# ── 3. Copy merged church.json ──────────────────────────────
mkdir -p "$CLAWIX_DIR/skills/packs"
cp "$HERE/skills/packs/church.json" "$CLAWIX_DIR/skills/packs/church.json"
echo ""
echo "📋  skills/packs/church.json installed (v2.0.0)"
echo "   8 agents · 20 sub-agents · 16 inspiration prompts"

# ── 4. Rebuild Clawix ────────────────────────────────────────
echo ""
echo "🔄  Running pnpm run update:clawix ..."
cd "$CLAWIX_DIR"
pnpm run update:clawix

echo ""
echo "🎉  Done!"
echo "    Open http://localhost:3000 → Explore → ⛪ Church Ministry"
