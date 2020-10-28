import consumer from "./consumer"

function scrollToBottom(){
  if($('#messages').length > 0) {
    $('#messages').scrollTop($('#messages')[0].scrollHeight);
  }
}

consumer.subscriptions.create("ChatroomChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    // Called when there's incoming data on the websocket for this channel
    $('#messages').append(data['message'])
    $('#message_content').val = ''
    scrollToBottom()
    return
  }
});

// not working
$( document ).on('turbolinks:load', function() {
  console.log("It works on each visit!")
  scrollToBottom()
  return
})
