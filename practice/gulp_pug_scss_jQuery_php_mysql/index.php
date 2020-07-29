<?php
require_once("db.php");

$link = db_connect();

  // формуємо запит
$query = "SELECT * FROM appartments";

  // виконуємо запит
$result = mysqli_query($link, $query);
if ( !$result ) {
	die(mysqli_error($link));
}

  // Записуємо отримані дані в масив $apartments
$n = mysqli_num_rows($result);
$appartments = array();
for ( $i = 0; $i < $n; $i++ ) {
	$row = mysqli_fetch_assoc($result);
	$appartments[] = $row;
}



?>


<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8"/>
	<title>Розміщення</title>
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
			<div class="logo"><a href="#"><img src="img/logo/logo2.png"/></a></div>
			<div class="navigation">
				<ul>
					<li><a href="index.html">Головна<br/><span>Ласкаво просимо</span></a></li>
					<li><a href="appartment-page.html">Апартаменти <br/><span>Вибір номера</span></a></li>
					<li><a href="contacts.html">Контакти <br/><span>Напишіть нам</span></a></li>
					<li class="reservation-btn custom-color-btn-back"><a href="#">Бронювання <br/><span>Забронювати номер</span></a></li>
				</ul>
			</div>
		</div>
		<div class="section-content">
			<h1>Варіанти для розміщення</h1>



			<?php
		// echo "<pre>";
		// print_r($appartments);
		// print_r($appartments);
		// echo "</pre>";

			foreach ($appartments as $value) {
				?>

				<div class="appartment">
					<div class="appartment__img" style="background-image: url(img/room/<?php echo $value[img]; ?>);"></div>
					<div class="appartment__desc">
						<div class="appartment__header">
							<div class="appartment__title"><?php echo($value[title] . " — " . $value[price]); ?></div>
							<div class="appartment__beds">
								<?php
									for ($i=0; $i < $value[beds]; $i++) {
										echo'<div class="fa fa-bed"></div>';
									}
								?>
							</div>
						</div>
						<div class="appartment__text">
							<p><?php echo $value[description]; ?></p>
						</div>
						<div class="appartment__footer"><a class="button button--appartment" href="appartment-page.html">Details</a>
							<div class="appartment__options">
								<div class="tag">air condition</div>
								<div class="tag">free wi-fi</div>
								<div class="tag">bath</div>
								<div class="tag">flat TV</div>
							</div>
						</div>
					</div>
				</div>
				<?php
			}
			?>

		</div>



		<div class="section-footer">
			<div class="map">
				<!-- img(src="http://via.placeholder.com/250x150", alt="")--><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5740.709414819223!2d115.1689508123794!3d-8.716764730321545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd246becfdf3a21%3A0xc9b3a559671f273b!2sBounty+Hotel!5e0!3m2!1sru!2sru!4v1516788876021" width="300" height="200" frameborder="0" style="border:0" allowfullscreen></iframe>
			</div>
			<div class="address">
				<p><strong>2 Commercial Road <br></strong>EH6 78H, Chicago <br>
					Ohio, United States <br>
					Full directions
				</p>
			</div>
			<div class="footer__social"><a href="#" target="_blank"><i class="fa fa-fb"></i></a><a href="#" target="_blank"><i class="fa fa-twitter"></i></a><a href="#" target="_blank"><i class="fa fa-youtube"></i></a></div>
		</div>
	</div>
</body>
<script src="libs/jquery.js"></script>
<script src="libs/jquery-ui-1.12.1.custom/jquery-ui.min.js"></script>
<script src="js/main.js"></script>
</html>
