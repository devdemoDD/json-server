const jsonServer = require('json-server');
const auth = require('json-server-auth');
const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const router = jsonServer.router('db.json');
const cors = require('cors');

const port = process.env.PORT || 3000;

server.use(cors());
server.use(auth);
server.use(middlewares);
server.use(router);

server.listen(port, () => {
  console.log(`json-server listening on ${port}`);
});
