/**
 * 코어 모듈
 * 1. http : 서버 런치, request 보냄
 * 2. https : ssl 서버관련 기능
 * 3. fs 
 * 4. path
 * 5. os
 */

const http = require('http');
const routes = require('./routes')

const server = http.createServer(routes);

server.listen(3000);
 