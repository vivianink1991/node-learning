/*
 * @Author: your name
 * @Date: 2020-08-12 22:34:08
 * @LastEditTime: 2020-08-12 22:54:12
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /node-learning/node-server-demo/src/index.js
 */
const router = require('./router')
const server = require('./server')

const requestHandlers = require("./requestHandler")

const handle = {
    '/': requestHandlers.start,
    '/start': requestHandlers.start,
    '/upload': requestHandlers.upload
}

// 解耦requestHandlers和route
server.start(router.route, handle)