const server = require('http').createServer()
const port = 8081

const io = require('socket.io')(server, {
  path: '/css',
  serveClient: false,
  pingInterval: 10000,
  pingTimeout: 5000,
  cookie: false
})

const loop = async (socket) => {
  socket.on('get_style', async (context) => {
    switch (context.style) {
      case 'a':
        socket.emit('style', { css: 'A Style' })
        break
      case 'b':
        socket.emit('style', { css: 'B Style' })
        break
      case 'c':
        socket.emit('style', { css: 'C Style' })
        break
      default:
        break
    }
  })
}

(() => {
  server.listen(port)
  io.on('connection', loop)
})()
