/**
 * Buffer Controller
 */

module.exports = function($scope, socket, buffer) {

   // initial console buffer
  buffer.append('<br>');
  buffer.append('Welcome to AlexKvazos\'s Minecraft Chat App');
  buffer.append('&gt; Press connect to connect to a Minecraft server and start chatting!');
  buffer.append('<br>');
  buffer.append('<i>Note: This application only works with 1.8 Minecraft servers.</i>');
  buffer.append('---');
  buffer.append('<br>');

};
