<?php
  sleep(2);

  if ($_POST['name'] == 'admin') {
    echo 'fail';
  } else {
    echo $_POST['name'];
  }
?>
