# Deploy Nodejs App to Meteor Cloud

This is a simple example of how to deploy a Nodejs app to [Meteor Cloud](https://www.meteor.com/cloud).
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

4. You need to use the following configuration with `WebApp`:

```
import { WebApp } from 'meteor/webapp'

// your app code here

WebApp.connectHandlers.use(fastify.server)
```

5. You can now add your Nodejs code to `server/main.js`. In this example, I'm using Fastify, but feel free to use other solutions, like Express.
6. Deploy your app to Meteor Cloud using the CLI or the web interface.

Just be aware that Meteor by default will be listening to port 3000, so you'll need to listen to a different port in your Nodejs app.

### Example

```
import Fastify from 'fastify'
import { WebApp } from 'meteor/webapp'

const fastify = Fastify({
  logger: false,
})

fastify.get('/', (request, reply) => {
  reply.send({ message: 'This is a Fastify app deployed to Meteor Cloud' })
})

fastify.listen({ port: 4000 }, (err, address) => {
  if (err) throw err
  console.log(`server listening on ${address}`)
})

WebApp.connectHandlers.use(fastify.server)

```
