# Prerequisites
```
- Node 6
```

# Development
```
> npm run custom-install

```
This will install material-design-lite into your source folder, this dependency is needed to create a clean build.
Managing it from the node_modules folder is not possible, since harp does not parse that folder. 

```
> npm start
```

# Production

```
> npm run compile # Will output a www/ folder
> firebase deploy # Will go live
```
