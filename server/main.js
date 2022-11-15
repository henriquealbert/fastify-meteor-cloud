import Fastify from 'fastify'
import { WebApp } from 'meteor/webapp'

const fastify = Fastify({
  logger: true,
})

fastify.get('/', (request, reply) => {
  reply.send({ message: 'This is a Fastify app deployed to Meteor Cloud' })
})

fastify.listen({ port: 4000 }, (err, address) => {
  if (err) throw err
  console.log(`server listening on ${address}`)
})

WebApp.connectHandlers.use(fastify.server)
