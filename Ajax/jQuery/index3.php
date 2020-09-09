<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>ajax and json</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script>
      $(document).ready(function() {
        $('select[name="country"]').bind('change', function() {
          $('select[name="city"]').empty();
          $.get('countryCheck.php', {country: $('select[name="country"]').val() }, function(data) {
            data = JSON.parse(data);
            for (var id in data) {
              $('select[name="city"]').append('<option value="'+id+'">'+data[id]+'</option>');
            }
          });
        });
      });
    </script>
  </head>
  <body>
    <label>add country</label>
    <select name="country">
      <option value="0" selected></option>
      <option value="1">USA</option>
      <option value="2">UA</option>
    </select>
    <label>city</label>
    <select name="city">
      <option value="0"></option>
    </select>
  </body>
</html>
