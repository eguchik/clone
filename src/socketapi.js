const io = require("socket.io")();
const socketapi = {
  io: io,
};

const db = require("./models");
// Add your socket.io logic here!
io.on("connection", (socket) => {
  socket.on("chat message", (msg) => {
    const newTweet = db.tweets.build({
      user_id: msg.user_id,
      tweet: msg.tweet,
    });
    newTweet.save();
    console.log(msg.user_id, msg.tweet);

    io.emit("chat message", msg);
  });
});

module.exports = socketapi;
