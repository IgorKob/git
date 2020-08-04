<?php

    // Якщо заповнені всі поля форми тоді готуємо лист і відправляємо
    if ( !empty($_POST) && trim($_POST['name']) != '' && trim($_POST['email']) != '' && filter_var($_POST['email'], FILTER_VALIDATE_EMAIL) && trim($_POST['message']) != ''  ) {

        // Формуємо текст листа
        $message =  "Вам прийшло нове повідомлення з сайту: <br><br>\n" .
                    "<strong>Ім'я відправника:</strong>" . strip_tags($_POST['name']) . "<br>\n" .
                    "<strong>Email відправника: </strong>". strip_tags($_POST['email']) . "<br>\n" .
                    "<strong>Повідомлення: </strong>". strip_tags($_POST['message']);

        // Формуємо тему листа, спеціально обробляючи її
        $subject = "=?utf-8?B?".base64_encode("Повідомлення з сайту!")."?=";

        // Вказуємо від кого буде відправлено лист
        $email_from = "info@gmail.com";
        $name_from = "Особистий сайт портфоліо";

        // Формуємо заголовки листa
        $headers = "MIME-Version: 1.0" . PHP_EOL .
                    "Content-Type: text/html; charset=utf-8" . PHP_EOL .
                    "From: " . "=?utf-8?B?".base64_encode($name_from)."?=" . "<" . $email_from . ">" .  PHP_EOL .
                    "Reply-To: " . $email_from . PHP_EOL;

        // Виконуємо відправку листа
        $sendResult = mail('vogihet837@fft-mail.com', $subject, $message, $headers);

        if ( $sendResult ) {
            // Перенаправляємо на сторінку "thankyou"
            header('location: thankyou.html');
        } else {
            $failure = "<div class=\"error\">Лист не було надіслано. Повторіть відправку ще раз.</div>";
        }

    }


    // Перевірка змінної на її наявність і на заповненість
    function checkValue($item, $message ) {
        if ( isset($item) && trim($item) == ''  ) {
            echo '<div class="error">' . $message . '</div>';
        }
    }

    // Роздруківка заповнених полів з форми, якщо стався висновок помилок
    function printPostValue($item){
        if ( isset($item) && strlen(trim($item)) > 0 ) {
            echo $item;
        }
    }

    // Перевірка email на наявність, заповненість і коректність email формату
    function checkEmail($email){
        if ( isset($email) && trim($email) == '' ) {
            echo '<div class="error">Email не може бути порожнім. Введіть email.</div>';
        } else if ( isset($email) && !filter_var($email, FILTER_VALIDATE_EMAIL) ){
            echo '<div class="error">Введіть коректну адресу email.</div>';
        }
    }

?>


<!DOCTYPE html>
<html lang="uk">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Надішліть нам повідомлення</title>
  <link rel="stylesheet" href="css/style.css">
  <link href="https://fonts.googleapis.com/css?family=Montserrat:500,700&display=swap&subset=cyrillic-ext" rel="stylesheet">
</head>

<body>
  <div class="overlay">
    <div class="content-wrapper">
      <h1 class="title">Надішліть нам повідомлення</h1>

      <form class="form-wrapper" action="index.php" method="post">

        <?php
            if (isset($failure)) {
                echo $failure;
            }
        ?>

        <div class="form-group">
          <label for="name" class="form-label">Ваше ім'я</label>
          <?php checkValue($_POST['name'], 'Ви не ввели ім\'я.'); ?>

          <input type="text" name="name" id="name" class="form-input" placeholder="Введіть ім'я" value="<?php printPostValue($_POST['name']); ?>">

        </div>
        <div class="form-group">
          <label for="email" class="form-label">Ваш email</label>
          <?php checkEmail($_POST['email']); ?>
          <input type="email" name="email" id="email" class="form-input" placeholder="Введіть email" value="<?php printPostValue($_POST['email']); ?>">
        </div>


        <div class="form-group">
          <label for="message" class="form-label">Повідомлення</label>
          <?php checkValue($_POST['message'], 'Ви не ввели повідомлення.'); ?>

          <textarea class="form-message" name="message" id="message" rows="10" cols="30" placeholder="Напишіть пару рядків"><?php printPostValue($_POST['message']); ?></textarea>
        </div>

        <input class="form-submit" type="submit" name="btn" class="btn" value="Надіслати повідомлення">

      </form>

    </div>

  </div>

</body>

</html>
