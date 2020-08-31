
Переносим работающий WP-сайт на новый домен
требуется «сказать» движку о том, что теперь мы полноценно работаем на новом домене.
Заходим в phpMyAdmin вашего хостинга или сервера. Выбираем нужную БД;
Во вкладке «SQL» нужно один за другим выполнить три простых запроса. Важно, чтобы вместо site1.ru (старый домен) и site2.ru (новый домен) стояли ВАШИ значения, причем БЕЗ СЛЕША;
Запрос 1:
UPDATE wp_options SET option_value = replace(option_value, 'http://site1.ru', 'http://site2.ru') WHERE option_name = 'home' OR option_name = 'siteurl';
Запрос 2:
UPDATE wp_posts SET guid = replace(guid, 'http://site1.ru','http://site2.ru');
Запрос 3:
UPDATE wp_posts SET post_content = replace(post_content, 'http://site1.ru', 'http://site2.ru');
