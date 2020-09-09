<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>ajax</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script>

      $(document).ready(function() {
        $('#btn').bind('click', function() {
          let x = 'admin';
          $.ajax({
            url: 'check2.php',
            type: 'POST',
            data: ({name: $('#name').val()}),
            dataType: 'html',
            beforeSend: function() {
              $('#content').text('2s...');
            },
            success: function(data) {
              if (data == 'fail') {
                alert('Імя заняте');
              } else {
                $('#content').text(data);
              }
            }
          });
        });
      });
    </script>
  </head>
  <body>
    <input type="text" id='name' placeholder="add text">
    <input type="button" id='btn'  value="send">
    <div id="content"></div>
  </body>
</html>
