https://wp-kama.ru/handbook/cheatsheet

                                  Файлы Темы (подключение)
Функции подключения файлов Темы
<?php get_header(); ?>
header.php

<?php get_template_part('file'); ?>
file.php

<?php get_search_form(); ?>
Форма Поиска searchform.php

<?php comments_template(); ?>
Шаблон Комментариев comments.php

<?php get_sidebar(); ?>
sidebar.php

<?php get_footer(); ?>
footer.php

get_template_directory() - Путь до род. темы (не дочерней). Нет / в конце
get_stylesheet_directory() - Путь до темы (где доч./род. style.css). Нет / в конце
get_parent_theme_file_path() - Путь файла род. темы (не дочерней)
get_theme_file_path() - Путь файла доч./род. темы
load_template() - Подключает файл (require_once)
locate_template() - Находит/Подключает файл доч./род. темы

get_template_directory_uri() - URL род. темы (не дочерней). Нет / в конце
get_stylesheet_directory_uri() - URL темы (учитывает доч. темы). Нет / в конце
get_theme_root_uri() - URL папки с темами. Нет / в конце
get_stylesheet_uri() - URL файла темы style.css
get_theme_file_uri() - URL файла доч./род. темы
get_parent_theme_file_uri() - URL файла род. темы



                                     Файлы Темы (иерархия) /themes/ТЕМА/
Иерархия файлов Темы
style.css - Файл стилей темы (обязательный)
index.php - Любая страница без файла шаблона (обязательный)
front-page.php - Главная страница
home.php - Страница Постов (или Главная страница)
functions.php - Специальный файл для php функций (кода)
404.php - Страница "не найдено"
comments.php - Шаблон Комментариев (подключаемый)
header.php - Шаблон Шапки сайта (подключаемый)
searchform.php - Шаблон формы Поиска (подключаемый)
sidebar.php - Шаблон Боковой панели (подключаемый)
footer.php - Шаблон Подвала сайта (подключаемый)
single.php - Запись (пост)
single-POST_TYPE.php - Запись типа POST_TYPE
single-POST_TYPE-POST_NAME.php - Запись POST_NAME типа POST_TYPE
singular.php - Запись любого типа
page.php - Постоянная Страница
page-POST_NAME.php - Страница с Именем POST_NAME
page-ID.php - Страница с ID
attachment.php - Страница Вложения
image.php - Страница Вложения-картинки
archive.php - Страница любого Архива
archive-POST_TYPE.php - Страница Архива типа записи
search.php - Страница Поиска
category.php - Страница Рубрики
category-SLUG.php - Страница Рубрики со слагом
category-ID.php - Страница Рубрики с id
tag.php - Страница Метки
tag-SLUG.php - Страница Метки со слагом
tag-ID.php - Страница Метки с id
taxonomy.php - Страница любого Термина
taxonomy-TAXONOMY.php - Страница Термина таксономии TAXONOMY
taxonomy-TAXONOMY-SLUG.php - Страница Термина SLUG таксономии TAXONOMY
author.php - Страница постов Автора



                          Шаблон записи из любого файла:
<?php
/*
Template Name: Мой шаблон страницы
Template Post Type: post, page, product
*/
// … остальной код шаблона



Информация о сайте bloginfo
bloginfo()
Выводит информацию о сайте
get_bloginfo()
Получает информацию о сайте
<?php bloginfo('name'); ?>
Название сайта
<?php bloginfo('description'); ?>
Короткое описание сайта
<?php bloginfo('template_url'); ?>
URL Темы: get_template_directory()
<?php bloginfo('template_directory'); ?>
Тоже что и template_url
<?php bloginfo('stylesheet_directory'); ?>
URL Темы: get_stylesheet_directory_uri()
<?php bloginfo('stylesheet_url'); ?>
URL файла темы style.css: get_stylesheet_uri()
<?php bloginfo('charset'); ?>
Кодировка сайта: UTF-8
<?php bloginfo('html_type'); ?>
Content-Type страницы: text/html
<?php bloginfo('language'); ?>
Локаль сайта (язык): ru-RU
<?php bloginfo('version'); ?>
Версия WordPress: 5.0.3
<?php bloginfo('rss2_url '); ?>
URL фида: /feed
<?php bloginfo('comments_rss2_url'); ?>
URL фида комментов: /comments/feed
<?php bloginfo('admin_email'); ?>
E-mail Админа

<?php bloginfo('pingback_url'); ?>
URL уведомлений на на файл xmlrpc.php
<?php bloginfo('rdf_url'); ?>
URL RDF/RSS 1.0 фида (/feed/rfd)
<?php bloginfo('rss_url'); ?>
URL RSS 0.92 фида (/feed/rss`)
<?php bloginfo('atom_url '); ?>
URL Atom фида (/feed/atom)
<?php bloginfo('url'); ?>
URL Фронта. Псевдомин home_url()
<?php bloginfo('wpurl'); ?>
URL Админки. Псевдомин site_url()
Цикл The Loop
Цикл «the loop»
3 способа построения циклов
in_the_loop()
Проверяет активен ли цикл WordPress
have_posts()
Проверяет есть ли записи для вывода
the_post()
Устанавливает следующий пост в цикле и global $post
setup_postdata()
Устанавливает global $post
the_ID()
Выводит ID текущего поста
the_title()
Выводит заголовок текущей записи
the_title_attribute()
Выводит заголовок записи для атрибута html тега
the_content()
Выводит контент записи
the_excerpt()
Выводит отрывок (цитату) записи, со вставкой в конеце [...]
the_excerpt_rss()
Выводит отрывок (цитату) (для RSS)
get_permalink()
Получает URL записи
the_permalink()
Выводит URL записи
comments_number()
Выводит число комментариев записи
edit_post_link()
Выводит ссылку (html) на редактирование поста

the_date()
Выводит/получает дату публикации записи
get_the_date()
Получает дату создания текущего поста
the_time()
Выводит время (дату) публикации записи
get_post_time()
Получает время (дату) публикации записи
the_modified_date()
Выводит время (дату), когда пост был изменен

the_post_thumbnail()
Выводит html код картинки-миниатюры текущего поста
get_post_thumbnail_id()
Получает ID миниатюры записи
has_post_thumbnail()
Имеет ли запись картинку-миниатюру. Условный тег
the_post_thumbnail_url()
Выводит URL миниатюры записи
the_attachment_link()
Выводит ссылку (тег A) вложения или страницы вложения
get_attachment_link()
Получает URL на страницу вложения (во фронте)
wp_get_attachment_link()
Получает ссылку (тег A) вложения или страницы вложения

the_tags()
Выводит ссылки на метки записи
the_category()
Выводит рубрики записи в виде ссылок
the_taxonomies()
Выводит ссылки <a> на термины записи
in_category()
Проверяет принадлежит ли записиь к категории
sticky_class()
Выводит класс "sticky", если это пост прилепленный пост
is_sticky()
Проверяет прилеплен ли пост к главной странице сайта
the_meta()
Выводит метаполя записи в <li> списке
get_post_format()
Получает формат (тип) поста: quote, status, video, audio

the_author()
Выводит имя автора поста
get_the_author()
Получает имя автора поста (display_name)
the_author_link()
Выводит ссылку (A тег) на сайт автора поста
get_the_author_link()
Получает ссылку (A тег) на сайт автора поста
the_author_posts()
Выводит общее число постов, написанных текущим автором
the_author_posts_link()
Выводит html код ссылки на страницу постов автора записи
the_author_meta()
Выводит метаполе автора поста
get_the_author_meta()
Получает метаполе автора поста
the_modified_author()
Выводит имя автора, который последним изменял пост






                                        Теги шаблона
Все Теги шаблона
home_url()
Получает URL главной страницы сайта
site_url()
Получает URL админки-сайта
wp_get_document_title()
Получает заголовок страницы для <title>
the_archive_title()
Выводит заголовок архивной страницы: метка, рубрика, дата
single_term_title()
Выводит/получает заголовок страницы термина
single_post_title()
Выводит/получает заголовок страницы записи
single_cat_title()
Выводит/получает заголовок страницы рубрики/метки
body_class()
Выводит css классы для тега <body>
wp_body_open()
Запускает хук wp_body_open. Используется сразу после <body>
wp_head()
Запускает хук wp_head. Для файла header.php
wp_footer()
Запускает хук wp_footer. Для файла footer.php
wp_list_categories()
Выводит список категорий в виде ссылок
wp_dropdown_categories()
Выводит выпадающий список рубрик/таксономий
wp_list_comments()
Выводит/получает комментарии записи
comment_form()
Выводит форму комментирования
wp_tag_cloud()
Выводит/получает облако меток
register_sidebar()
Регистрирует панель виджетов
register_sidebars()
Регистрирует панели виджетов (сразу несколько)
wp_nav_menu()
Выводит произвольное меню, созданное в админке
register_nav_menu()
Регистрируется одно место для меню
register_nav_menus()
Регистрируется несколько мест для меню
wp_get_attachment_image()
Получает IMG тег картинки
wp_get_attachment_image_src()
Получает данные картинки: URL/ширина/высота
wp_get_attachment_image_url()
Получает URL картинки по ID
category_description()
Получает описание рубрики
term_description()
Получает описание термина
get_the_term_list()
Выводит список терминов записи в виде ссылок
get_avatar()
Получает html код аватара, тег <img>
next_post_link()
Выводит ссылку на следующую по дате запись
previous_post_link()
Выводит ссылку на предыдущий по дате запись
wp_link_pages()
Выводит пагинацию для многостраничных записей <!--nextpage-->
the_post_navigation()
Выводит HTML блок ссылок на следующую/предыдущую записи
wp_get_archives()
Выводит ссылки на страницы архивов по дате: дни, месяцы, годы
wp_login_form()
Выводит HTML код формы входа
edit_tag_link()
Выводит ссылку на редактирование текущей метки










                                               Плагин
Создание Плагинов
register_activation_hook()
Регистрирует функцию активации плагина
register_deactivation_hook()
Регистрирует функцию деактивации плагина
register_uninstall_hook()
Регистрирует функцию удаления плагина

plugins_url()
Получает URL папки плагинов/mu плагинов (без слэша на конце)
plugin_basename()
Путь до файла плагина (от каталога плагинов)
plugin_dir_path()
Получает путь до папки плагина (со слэшем на конце)
plugin_dir_url()
Получает URL папки плагина (со слэшем на конце)

get_plugins()
Получает данные плагинов (активных и неактивных)
get_plugin_data()
Получает данные плагина из заголовков файла

activate_plugins()
Активирует плагины
deactivate_plugins()
Деактивирует плагины
is_plugin_active()
Проверяет активен ли плагин. Работает только в админке








                                         Script и Style
Функции Script и Style
wp_register_script()
Регистрирует файл
wp_enqueue_script()
Регистрирует и подключает файл
wp_dequeue_script()
Удаляет файл из очереди на вывод
wp_add_inline_script()
Добавляет JS код к зарегистрированному скрипту
wp_deregister_script()
Отменяет регистрацию файла
wp_script_add_data()
Добавляет данные скрипту. Пример: скрипт только для «IE 6», «lt IE 9»
wp_localize_script()
Добавляет данные перед указанным скриптом
wp_script_is()
Был ли файл зарегистрирован/ожидает вывода/выведен

wp_register_style()
Регистрирует файл
wp_enqueue_style()
Регистрирует и подключает файл
wp_dequeue_style()
Удаляет файл из очереди на вывод
wp_add_inline_style()
Добавляет стили прямо в html документ
wp_deregister_style()
Отменяет регистрацию файла
wp_style_add_data()
Добавляет данные стилям. Пример: стили только для «IE 6», «lt IE 9»
wp_style_is()
Был ли файл зарегистрирован/ожидает вывода/выведен












                                        Функции Хуков
Как работают хуки в WordPress
Хронология выполнения событий (хуков)
add_action()
Вешает функцию на событие
remove_action()
Удаляет функцию у события
did_action()
Получает число, сколько раз было выполнено событие
do_action()
Создает событие
do_action_ref_array()
Создает событие. Аргументы массивом
has_action()
Проверяет повешена ли функция на событие
current_action()
Получает название текущего события
doing_action()
Проверяет обрабатывается ли событие в текущий момент
remove_all_actions()
Удаляет все функции прикрепленные к событию

add_filter()
Вешает функцию на фильтр
remove_filter()
Удаляет функцию у фильтра
apply_filters()
Создает фильтр
apply_filters_ref_array()
Создает фильтр. Аргументы массивом
has_filter()
Проверяет повешена ли функция на фильтр
current_filter()
Получает название текущего фильтра
doing_filter()
Проверяет обрабатывается ли фильтр в текущий момент
remove_all_filters()
Удаляет все функции прикрепленные к фильтру












                                       Локализация (переводы)
Фукнции Локализации
Переводы в WordPress
__()
Получает перевод строки
_e()
Выводит перевод строки
_n()
Получает перевод строки после числа

esc_attr__()
Получает перевод строки + esc_attr()
esc_attr_e()
Выводит перевод строки + esc_attr()
esc_html__()
Получает перевод строки + esc_html()
esc_html_e()
Выводит перевод строки + esc_html()

_x()
Получает перевод строки для контекста
_ex()
Выводит перевод строки для контекста
_nx()
Получает перевод строки после числа для контекста

date_i18n()
Получает переведенную дату. Локализация для date()

determine_locale()
Получает локаль сайта, подходящую для текущего запроса
get_locale()
Получает локаль сайта. Пр: en_US
get_user_locale()
Получает локаль юзера
switch_to_locale()
Переключает локаль сайта
is_locale_switched()
Проверяет была ли использована switch_to_locale()

load_plugin_textdomain()
Загружает .mo файл из папки плагина
load_muplugin_textdomain()
Загружает .mo файл из папки MU плагина
load_theme_textdomain()
Загружает .mo файл из папки темы
load_child_theme_textdomain()
Загружает .mo файл из папки дочерней темы
load_textdomain()
Загружает указанный .mo файл из любой папки
is_textdomain_loaded()
Проверяет загружен ли .mo файл
unload_textdomain()
Выгружает загруженный .mo файл
Условные теги (типов страниц и запросов)
