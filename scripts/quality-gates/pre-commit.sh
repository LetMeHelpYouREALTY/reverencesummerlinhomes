#!/bin/bash
# Pre-commit Quality Gate
# Runs all quality checks before allowing a commit
# This script is called by git hooks

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/../.." && pwd)"

cd "$PROJECT_ROOT"

echo "🚀 Running pre-commit quality gates..."
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

PASSED=0
FAILED=0

# Run format check (non-blocking, just warns)
echo -e "${YELLOW}📝 Checking code formatting...${NC}"
if "$SCRIPT_DIR/format-check.sh" > /dev/null 2>&1; then
  echo -e "${GREEN}✅ Format check passed${NC}"
  PASSED=$((PASSED + 1))
else
  echo -e "${YELLOW}⚠️  Format check: Some files need formatting (run 'npm run format')${NC}"
  FAILED=$((FAILED + 1))
fi
echo ""

# Run lint check (blocking)
echo -e "${YELLOW}🔍 Running lint check...${NC}"
if "$SCRIPT_DIR/lint-check.sh"; then
  PASSED=$((PASSED + 1))
else
  FAILED=$((FAILED + 1))
  echo ""
  echo -e "${RED}❌ Pre-commit failed: Lint check failed${NC}"
  exit 1
fi
echo ""

# Run type check (blocking)
echo -e "${YELLOW}🔍 Running type check...${NC}"
if "$SCRIPT_DIR/typecheck.sh"; then
  PASSED=$((PASSED + 1))
else
  FAILED=$((FAILED + 1))
  echo ""
  echo -e "${RED}❌ Pre-commit failed: Type check failed${NC}"
  exit 1
fi
echo ""

# Summary
echo ""
echo -e "${GREEN}✅ All quality gates passed! (${PASSED} checks)${NC}"
exit 0
