<?php

	require_once("db.php");
	$link = db_connect();

	define('ROOT', dirname(__FILE__) . '/');



	if ($_POST['app-add']) {



		$title = trim($_POST['app-title']);
		$desc = trim($_POST['app-desc']);
		$beds = trim($_POST['app-beds']);
		$price = trim($_POST['app-price']);

		$errors = array();

		if (trim($title) == '') {
			$errors[] = 'Введіть назву готелю';
		}

		if ( empty($errors)) {

			if ( isset($_FILES['app-img'])){

				$fileName = $_FILES['app-img']['name']; // room_02.jpg

				$k = explode(".", $fileName); // room_02  jpg
				$fileExt = end($k ); // jpg

				$fileName = $_FILES['app-img']['name'];
				$tmpLocation = $_FILES['app-img']['tmp_name'];

				$dbFileName = rand(1000000000000000000,9999999999999999). "." . $fileExt;
				$imgLocation = ROOT . 'img/room/' . $dbFileName ;

				$moveResult = move_uploaded_file($tmpLocation, $imgLocation);

				if( $moveResult != true ){
					die("File uplaod FAILED!");
				}

				// echo $fileName;
			}

			$t = "INSERT INTO appartments (title, description, beds, price, img) VALUES ('%s', '%s', '%s', '%s', '%s')";

			$query = sprintf(
				$t,
				mysqli_real_escape_string($link, $title),
				mysqli_real_escape_string($link, $desc),
				mysqli_real_escape_string($link, $beds),
				mysqli_real_escape_string($link, $price),
				mysqli_real_escape_string($link, $dbFileName)
			);

			$result = mysqli_query($link, $query);
			if ( !$result ) {
				die(mysqli_error($link));
			}

		} else {
			echo '<div class="message message--error">';
			echo 'Заповніть назва готелю!';
			echo '</div>';
		}



	}



?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8"/>
	<title>Адмін панель</title>
	<link rel="stylesheet" href="libs/bootstrap-4/css/bootstrap.min.css"/>
	<link rel="stylesheet" href="css/main.css"/>
	<link rel="stylesheet" href="libs/jquery-ui-1.12.1.custom/jquery-ui.min.css"/>
	<link rel="stylesheet" href="libs/jquery-ui-1.12.1.custom/jquery-ui.structure.css"/>
	<link rel="stylesheet" href="libs/jquery-ui-1.12.1.custom/jquery-ui.theme.min.css"/>
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,300i,400,700,700i&amp;amp;subset=cyrillic-ext"/>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/><!--[if lt IE 9]>
	<script src="http://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.2/html5shiv.min.js"></script><![endif]-->
</head>
<body>
	<div class="wrapper">
		<div class="section-header">
			<div class="logo">
				<h4>Адмін панель</h4>
			</div>
		</div>
		<div class="section-content">
			<?php
				// echo "<pre>";
				// print_r($_POST);
				// print_r($_FILES);
				// echo "</pre>";

				if ( $result ) {
					echo '<div class="message message--success">';
					echo 'Номер успішно доданий!';
					echo '</div>';
				}

			?>


			<h1>Додати номер</h1>
			<form class="contact-form mt30" id="" action="admin.php" method="POST" enctype="multipart/form-data">
				<div class="row" id="form-notify"></div>
				<div class="contact-form__row">
					<input class="input" type="text" id="app-title" name="app-title" placeholder="Назва номера"/>
				</div>
				<div class="contact-form__row">
					<input class="input" type="text" id="app-price" name="app-price" placeholder="Ціна за добу"/>
				</div>
				<div class="contact-form__row">
					<input class="input" type="text" id="app-beds" name="app-beds" placeholder="Кількість спальних місць"/>
				</div>
				<div class="contact-form__row">
					<input class="input" type="file" id="app-img" name="app-img"/>
				</div>
				<div class="contact-form__row">
					<textarea class="textarea" id="app-desc" name="app-desc" placeholder="Опис номера"></textarea>
				</div>
				<div class="contact-form__row">
					<input class="button" type="submit" id="app-add" name="app-add" value="Додати номер"/>
				</div>
			</form>
		</div>
		<div class="section-footer">
			<div class="address">
				<p>© Адмін панель</p>
			</div>
		</div>
	</div>
</body>
<script src="libs/jquery.js"></script>
<script src="libs/jquery-ui-1.12.1.custom/jquery-ui.min.js"></script>
<script src="libs/bootstrap-4/js/bootstrap.min.js"></script>
<script src="js/main.js"></script>
</html>
