const io = require("socket.io")();
const socketapi = {
  io: io,
};

// Add your socket.io logic here!
io.on("connection", (socket) => {
  socket.on("chat message", (msg) => {
    io.emit("chat message", msg);
  });
});

module.exports = socketapi;
