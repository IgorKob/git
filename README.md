# howto
виправлений баг, зверстаний новий блок, змінена сітка
bug fixed, new block compiled, mesh changed

##plugin in chrom
##https://www.octotree.io/


Відкрийте командний рядок редактора **Crtl + Shift + P** і введіть команду **"GitHub: Clone"**
або натисніть сполучення клавіш **Alt + G + =**

### версія gitа
git --version

### авторизація
git config --global user.name IgorKob
### авторизація
git config --global user.email myemail@gmail.com

### щоб переглянути дані
git config --global user.name

### очистити командний рядок редактора
clear



////////////

# 1.) ініт локального репозиторія
git init

### Для додавання файлів в локальне сховище в Git використовується кілька команд:
git add  **- додавання файлів в стадію очікування;**
git commit  **- додавання файлів в локальне сховище;**
git rm  **- скасування дій.**

### Для відстеження статусу всіх файлів необхідно використовувати команду
git status


### Показує відмінності між двома наборами файлів ("styles" - у конкретній папці)
git diff
git diff styles/
git diff -r HEAD styles/style.css  
### -r прапор означає « по порівнянні з конкретної ревізії», і HEAD це ярлик означає «найостанніший Комміт».

# 2.) Можна додати все, прописавши git add . або git add -A, а також можна додавати лише деякі файли.
Для їх вибору можна скористатися різними командами:
### git add
###         .        всі файли
###         *.html   всі файли з розширенням html
###         **/*.html
###         asd/    цілу папку asd
###         /asd/ папку в корені проекту
###         asd/asd.js   один файл в папці
###         asd/*.html    всі файли html в папці asd
###         asd/**/*.html   всі файли html в папці asd і вложених в неї папок
###         !css/style.css    всі файли в папці крім файлу style.css
###         !*.js       всі файли крім файлів з розширенням .js


### Для ігнорування файлів, які не потрібно закидувати,
### створюється файл тільки з розширенням:
### .gitignore
### де можна вказати які файли потрібно ігнорувати
### index.html
### css/
### js/*.js
### *.php



# 3.) Після підготовки файлів їх необхідно відправити в локальне сховище (виконати Комміт).
git commit -m "Коментарі"


### Якщо ви випадково помилково ввели повідомлення про фіксацію, ви можете змінити його, використовуючи.
git commit --amend - m "new message"


### git commit без -m для фіксації змін. Відкриється редактор Nano. Напишіть значуще повідомлення та натисніть Ctrl + O та Enter, щоб зберегти, а потім Ctrl + X, щоб залишити редактор.

### Oтримаєте список всіх коммітов що були зроблені у проекті, а також їх ідентифікатори.
git log --oneline
### Oтримаєте список всіх коммітов у папці
git log style/ 


### Якщо додали файли в стадію очікування, але передумали і не хочете додавати деякі з них
git rm -cached asd.html


### Щоб переглянути проект на стадії будь-якого коммітов необхідно прописати команду,
### де id це ідентифікатор коммітов, який хочете переглянути.
git checkout id


### для повернення до поточної версії проекту
git checkout master



/////////////////


### Для скасування коммітов, де id це ідентифікатор коммітa.
git revert id


### Для видалення коммітов
### видалить комміт і всі дані будуть повернуті до проекту що був на стадії коммітов.
git reset id --hard

### для виходу з редатора
:wq


### Для створення гілки, де name це назва гілки, яку хочете створити.
git branch name



### Щоб перейти на гілку, де name це назва гілки, на яку ви хочете перейти.
### Щоб перейти на основну гілку пропишіть слово «master».
git checkout name

### Щоб створити гілку і перейти до неї
git checkout -b name


### Щоб переглянути список гілок
git branch -a


### Для об'єднання гілок, де name це гілку, яку ви хочете приєднати до головної гілки.
git merge name





# 4.) Для того, щоб зв'язати створений нами локальний репозитарій з віддаленим:
git remote add origin https://github.com/tutorialzine/awesome-project.git


### Щоб вибрати репозиторій на який нам потрібний залити файли
git remote set-url origin https://github.com/../kim.git


### Показує статус підключення
git remote


# 5.) Щоб відправити файли
git push -u origin master

### Відправка коммітов здійснюється за допомогою команди push,
### яка має два параметри - ім'я віддаленого сховища (в нашому випадку myrep) і гілку,
### в яку необхідно внести зміни (master - це гілка за замовчуванням для всіх репозиторіїв).
git push myrep master


# Як клонувати віддалений репозиторій
git clone https://github.com/tutorialzine/awesome-project.git



# Як запросити зміни з віддаленого сховища
git pull

### Як запросити зміни з віддаленого сховища
git pull origin master
