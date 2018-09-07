# Prerequisites

- Node 6
- NPM

Make sure you have the latest npm installed.

```bash
npm install npm@latest -g
```

# Development

```bash
npm install
npm run custom-install
npm start
```

This will install material-design-lite into your source folder, this dependency is needed to create a clean build. Managing it from the node_modules folder is not possible, since harp does not parse that folder.

```bash
npm start
```

# Production

Before you push to production, make sure to test the build from staging area. To do this, perform a production build as shown below. The compiled code will be placed under the wwww folder.

```bash
./build.sh
```

Once you've tested the production build in staging, you may push deploy to production by doing a PR to
the `production` branch.

# Deployment flow

- Always open pull requests to the staging branch (PR's to the master branch will be denied)
  - All PR's will be verified and tested on staging once accepted.
- Master releases are done if staging changes are accepted by Augury team members
- All releases will be versioned.
