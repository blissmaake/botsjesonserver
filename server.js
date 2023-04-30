const jsonServer = require("json-server")
const server = jsonServer.create()
const router = jsonServer.router("bots.json") // Replace db.json with your own JSON file name
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)

const PORT = process.env.PORT || 8000
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`)
})
