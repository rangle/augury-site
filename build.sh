#!/usr/bin/env bash

# Rajinder Yadav: Jan 26, 2017
# Augury website build script, run this script to build and test site locally.

# Remove compiled web folder, "www"
rm -rf www

# Delete docs folder, new docs will be fetch from augury-documentation Git repo.
rm -rf ./src/pages/docs

# The build will copy all the demo application from augury-examples Git repo.
npm run compile

echo -e "\n\n*** ATTENTION ***\nOnce you have tested the production build, deploy using:\nnpm run deploy:staging/production\n\n"

# Run webserver to test build locally.
npm run serve:staging

