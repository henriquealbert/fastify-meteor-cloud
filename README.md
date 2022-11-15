# Deploy Nodejs App to Meteor Cloud

This is a simple example of how to deploy a Nodejs app to Meteor Cloud.
It's a bit of a hack, but it works.

## Setup

1. Create a meteor app using `meteor create --bare myapp`
2. Add the file `server/main.js` to your app - this is the entry point for your app
3. Add the following configuration to your `package.json`:

```
 "meteor": {
    "mainModule": {
      "server": "server/main.js"
    }
  }
```

4. You can now add your Nodejs code to `server/main.js`. In this example, I'm using Fastify, but feel free to use other solutions, like Express.
5. Deploy your app to Meteor Cloud using the CLI or the web interface.

Just be aware that Meteor by default will be listening to port 3000, so you'll need to change that in your Nodejs code.
