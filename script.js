// Creating a message
// Adding Timestamps
$(document).ready(function(){
  $('#new-message-button').on('click', function(){
    var messageText = $('textarea').val()
    var realTime = new Date().toTimeString().split(' ')[0]
    $('#conversation').append('<li class="message">'+
      '<a class=\'delete\' href=\'#\'>Delete</a>'+
      '<h3 class="author">Me</h3>'+
      '<p class="message-body">' + messageText + '</p>'+
      '<span class="timestamp">' + realTime + '</span>'+
      '</li>');
  });
});

// Deleting a message
$(document).ready(function(){
  $('ol').on('click', '.delete', function(){
    $(this).parent('li').remove();
    // console.log(this);
  });
});
