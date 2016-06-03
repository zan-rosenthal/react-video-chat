import io from 'socket.io';

export default function(server){
  const socketServer = io(server);
  const connections = [];
  var userId = 0;

  socketServer.on('connection', socket => {

    connections.push(socket);
    userId += 1;

    socket.emit('start', { userId });
    console.log('userId '+userId+' now connected');

    socket.on('message', data=> {

      connections.forEach(connectedSocket => {
        if(connectedSocket !== socket){
          console.log('messge received', data);
          connectedSocket.emit('message', data);
        }
      });
    });

    socket.on('disconnect', ()=>{
      const index = connections.indexOf(socket);
      connections.splice(index, 1);
    });
  });

}
