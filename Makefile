SRC=src
TST=test
DIST=dist

TS_SOURCES=$(shell find $(SRC) -type f -name '*.ts')
TEST_SOURCES=$(shell find $(TST) -type f -name '*.ts')
LOCKFILE=pnpm-lock.yaml
TSC=./node_modules/.bin/tsc
ESLINT=./node_modules/.bin/eslint_d
PRETTIER=./node_modules/.bin/prettier
JEST=./node_modules/.bin/jest

JEST_FLAGS=--coverage

default all: $(TS_SOURCES) Makefile node_modules
	$(TSC)

node_modules: package.json $(LOCKFILE)
	pnpm install

lint: node_modules
	$(PRETTIER) $(TS_SOURCES) $(TEST_SOURCES) || exit 1
	$(ESLINT) $(TS_SOURCES) $(TEST_SOURCES) || exit 1

fix: node_modules
	$(PRETTIER) $(TS_SOURCES) $(TEST_SOURCES) --write
	$(ESLINT) $(TS_SOURCES) $(TEST_SOURCES) --fix

test: node_modules $(TS_SOURCES) $(TEST_SOURCES)
	$(JEST) $(JEST_FLAGS)

.PHONY: lint fix test clean
