# Prerequisites
```
- Node 6
```

# Development
```
> npm run custom-install
> npm start

```
This will install material-design-lite into your source folder, this dependency is needed to create a clean build.
Managing it from the node_modules folder is not possible, since harp does not parse that folder.

```
> npm start
```

# Production

```
> npm run compile # Will output a www/ folder
> npm run serve:staging # Test production output
> npm run deploy:staging/production
```


# Deployment flow
- Always open pull requests to the staging branch (PR's to the master branch will be denied)
    - All PR's will be verified and tested on staging once accepted.
- Master releases are done if staging changes are accepted by Augury team members
- All releases will be versioned.


