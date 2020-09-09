<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>ajax</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script>

      // event.preventDefault();

      function funcBefore() {
        $('#information').text('Загрузка даних...');
      }
      function funcSuccess(data) {
        $('#information').text(data);
      }
      $(document).ready(function() {
        $('#load').bind('click', function() {
          let admin = 'admin';
          $.ajax({
            url: 'content.php',
            type: 'POST',
            data: ({name: admin, number: 5}),
            dataType: 'html',
            beforeSend: funcBefore,
            success: funcSuccess
          });
        })
      });

    </script>
  </head>
  <body>
    <p id="load" style='cursor: pointer'>Загрузити дані</p>
    <div id="information"></div>
  </body>
</html>
