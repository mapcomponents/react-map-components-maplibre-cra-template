# Mapcomponents Template

An easy way to create a Mapcomponents Maplibre Map-app!

## Getting started

1. Run ```npx create-react-app {myAppName} --template @mapcomponents/cra-template```
2. ```cd``` into your project
3. Start the development server ```yarn start``` 


## Create a build

Creates an nginx container image that serves an optimized production build 

```docker build .```

Start the image serving on host port 80

```docker run -p 80:8080 {image_hash}```

### Happy Coding!