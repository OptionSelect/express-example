const express = require('express')

const app = express()

app.get('/jason.json', (request, response) => {
  const data = {
    name: 'Jason',
    when: new Date(),
    what: 'loves fooberies.'
  }
  response.json(data)
})

app.get('/', (request, response) => {
  response.send(`
    Hello world
    <p>
      <a href = "/jason"> Tell me something about Jason.</a>
    </p
  `)
})

app.get('/jason', (request, response) => {
  response.send(`Jason loves fooberries at ${new Date()}
  <p>
    <a href = "/">Home</a>
  </p>
  `)
})
app.listen(3000, () => {
  console.log('Listening on port 3000')
})
