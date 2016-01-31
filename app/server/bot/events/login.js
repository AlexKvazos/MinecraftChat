import moment from 'moment';

export default (socket) => {

  let onLogin = () => {
    let timestamp = moment().format('MMM D h:mm:ss a');

    socket.emit('buffer:success', `Successfully logged in as ${socket.mcbot.username} with entity id ${socket.mcbot.entity.id}`);
    socket.emit('bot:connect', {
      host: socket.connectionParams.hostname,
      port: socket.connectionParams.port,
      username: socket.mcbot.username
    });
    console.log(`${timestamp}: ${socket.connectionParams.hostname}:${socket.connectionParams.port} - ${socket.mcbot.username} [logged in]`);
  };

  socket.mcbot.on('login', onLogin);

};
