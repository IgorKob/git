<?php
  if ( $_GET["country"] == 1 ) {
    echo json_encode( array("1" => "Вашингтон", "2" => "Сіетл") );
  } else if ( $_GET["country"] == 2 ) {
    echo json_encode( array("3" = "Київ", "4" => "Львів") );
  }
?>
