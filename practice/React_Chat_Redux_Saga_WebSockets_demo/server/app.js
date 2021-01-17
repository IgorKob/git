const WebSocket = require('ws')

const wss = new WebSocket.Server({ port: 8989 })

const users = [
  {id: 111, name: 'Admin1'},
  {id: 222, name: 'Admin2'},
]

const broadcast = (data, ws) => {
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN && client !== ws) {
      client.send(JSON.stringify(data))
    }
  })
}

wss.on('connection', (ws) => {
  let index
  ws.on('message', (message) => {
    const data = JSON.parse(message)
    console.log(message)
    switch (data.type) {
      case 'SET_USER': {
        index = users.length
        users.push({ id: index + 1, name: data.name })
        ws.send(JSON.stringify({
          type: 'GET_USERS',
          users
        }))
        broadcast({
          type: 'GET_USERS',
          users
        }, ws)
        break
      }
      case 'SET_MESSAGE':
        broadcast({
          type: 'SET_MESSAGE',
          message: data.message,
          author: data.author
        }, ws)
        break
      default:
        break
    }
  })

  ws.on('close', () => {
    users.splice(index, 1)
    broadcast({
      type: 'GET_USERS',
      users
    }, ws)
  })
})