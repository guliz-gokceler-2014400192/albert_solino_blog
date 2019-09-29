import consumer from "./consumer"

consumer.subscriptions.create("CommentsChannel", {
  connected() {
    console.log('connected');
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    console.log('disconnected');
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    console.log('received');
    console.log(data.comment);
    console.log(document.getElementById('comments').innerHTML);
    document.getElementById('comments').innerHTML += data.comment;
    //$('#comments').append data.comment
    // Called when there's incoming data on the websocket for this channel
  }
});
