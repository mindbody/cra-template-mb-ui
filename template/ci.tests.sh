#!/usr/bin/env node

# Running tests, 
yarn test:ci

# making directory for results to be published in VSTS, 
yarn mkdirp ./test-results

# then moving tests results into that new folder
yarn move-cli *.trx ./test-results/test-results.trx