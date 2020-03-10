#!/usr/bin/env node

# Running tests, 
# making directory for results to be published in VSTS, 
# then moving tests results into that new folder
yarn test:ci && yarn mkdirp ../../test-results && yarn move-cli *.trx ../../test-results/test-results.trx