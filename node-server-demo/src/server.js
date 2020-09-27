/*
 * @Author: your name
 * @Date: 2020-08-12 22:34:02
 * @LastEditTime: 2020-08-12 23:19:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /node-learning/node-server-demo/src/server.js
 */
const http = require('http')
const url = require('url')

const start = function(route, handle) {
    function onRequest(request, response){
        var pathname = url.parse(request.url).pathname;
        console.log("Request for "+ pathname +" received.");
        
        let postData = ''
        request.setEncoding("utf8");

        request.addListener("data", function(postDataChunk) {
            postData += postDataChunk;
            console.log("Received POST data chunk '" + postDataChunk +"'.");
        });

        request.addListener("end", function() {
            route(pathname, handle, response, postData);
        });
    }
    const server = http.createServer(onRequest)
    server.listen(9000)
    console.log('Server starts listen at 9000')
}

module.exports = {
    start
}