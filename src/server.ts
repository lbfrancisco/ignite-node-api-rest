import fastify from 'fastify'
import { knex } from './database'

const app = fastify()

app.get('/hello', async () => {
  const [transaction] = await knex('transactions')
    .insert({
      title: 'hello',
      amount: 1000,
    })
    .returning('*')

  // const transaction = await knex('transactions').select('*')

  return transaction
})

app
  .listen({
    port: 3333,
  })
  .then(() => console.log('Server is running!'))
