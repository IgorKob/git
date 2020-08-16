jQuery(document).ready(function($) {
  var form = $('#contactForm');
  var action = form.attr('action');

  form.on('submit', function(event) {
    var formData = {
      contactName: $('#contactName').val(),
      contactEmail: $('#contactEmail').val(),
      contactSubject: $('#contactSubject').val(),
      contactMessage: $('#contactMessage').val()
    };

  $.ajax({
    url: action,
    type: 'POST',
    data: formData,
    error: function(request, txtstatus, errorThrown) {
      console.log(request);
      console.log(txtstatus);
      console.log(errorThrown);
    },
    success: function() {
      form.html("send mail ok");
    }
  });
    event.preventDefault();
  });
});
