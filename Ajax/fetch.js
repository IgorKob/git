// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

// запрос с помощью fetch состоит из двух операторов await:
let response = await fetch(url, options); // завершается с заголовками ответа
let result = await response.json(); // читать тело ответа в формате JSON

// Или, без await:
fetch(url, options)
  .then(response => response.json())
  .then(result => /* обрабатываем результат */)


                      Параметры ответа:
response.status – HTTP-код ответа,
response.ok – true, если статус ответа в диапазоне 200-299.
response.headers – похожий на Map объект с HTTP-заголовками.


                  Методы для получения тела ответа:
response.text() – возвращает ответ как обычный текст,
response.json() – преобразовывает ответ в JSON-объект,
response.formData() – возвращает ответ как объект FormData (кодировка form/multipart, см. следующую главу),
response.blob() – возвращает объект как Blob (бинарные данные с типом),
response.arrayBuffer() – возвращает ответ как ArrayBuffer (низкоуровневые бинарные данные),


                Опции fetch, которые мы изучили на данный момент:
method – HTTP-метод,
headers – объект с запрашиваемыми заголовками (не все заголовки разрешены),
body – данные для отправки (тело запроса) в виде текста, FormData, BufferSource, Blob или UrlSearchParams.




// Пример отправки POST запроса:
async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *client
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return await response.json(); // parses JSON response into native JavaScript objects
}

postData('https://example.com/answer', { answer: 42 })
  .then((data) => {
    console.log(data); // JSON data parsed by `response.json()` call
  });





  // Отправка данных в формате JSON
  const url = 'https://example.com/profile';
  const data = { username: 'example' };

  try {
    const response = await fetch(url, {
      method: 'POST', // или 'PUT'
      body: JSON.stringify(data), // данные могут быть 'строкой' или {объектом}!
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const json = await response.json();
    console.log('Успех:', JSON.stringify(json));
  } catch (error) {
    console.error('Ошибка:', error);
  }






  // Загрузка нескольких файлов на сервер
  // На сервер можно загрузить несколько файлов, используя комбинацию HTML-элемента <input type="file" multiple />, FormData() и fetch().
  const formData = new FormData();
  const photos = document.querySelector('input[type="file"][multiple]');

  formData.append('title', 'Мой отпуск в Вегасе');
  for (let i = 0; i < photos.files.length; i++) {
    formData.append('photos', photos.files[i]);
  }

  try {
    const response = await fetch('https://example.com/posts', {
      method: 'POST',
      body: formData
    });
    const result = await response.json();
    console.log('Успех:', JSON.stringify(result));
  } catch (error) {
    console.error('Ошибка:', error);
  }








/////////////
let response = await fetch(url);

if (response.ok) { // если HTTP-статус в диапазоне 200-299
  // получаем тело ответа
  let json = await response.json();
} else {
  alert("Ошибка HTTP: " + response.status);
}



// .......Response предоставляет несколько методов, основанных на промисах, для доступа к телу ответа в различных форматах:
response.text() – читает ответ и возвращает как обычный текст,
response.json() – декодирует ответ в формате JSON,
response.formData() – возвращает ответ как объект FormData
response.blob() – возвращает объект как Blob (бинарные данные с типом),
response.arrayBuffer() – возвращает ответ как ArrayBuffer (низкоуровневое представление бинарных данных),
response.body – это объект ReadableStream, с помощью которого можно считывать тело запроса по частям.



// пример, получим JSON-объект с последними коммитами из репозитория на GitHub:
let url = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits';
let response = await fetch(url);
let commits = await response.json(); // читаем ответ в формате JSON
alert(commits[0].author.login);


// То же самое без await, с использованием промисов:
fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits')
  .then(response => response.json())
  .then(commits => alert(commits[0].author.login));


// Для получения ответа в виде текста используем await response.text() вместо .json():
let response = await fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits');
let text = await response.text(); // прочитать тело ответа как текст
alert(text.slice(0, 80) + '...');






// Например, этот код отправляет объект user как JSON:
let user = {
  name: 'John',
  surname: 'Smith'
};

let response = await fetch('/article/fetch/post/user', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  },
  body: JSON.stringify(user)
});

let result = await response.json();
alert(result.message);






// Отправка изображения
// Мы можем отправить бинарные данные при помощи fetch, используя объекты Blob или BufferSource.
<body style="margin:0">
  <canvas id="canvasElem" width="100" height="80" style="border:1px solid"></canvas>

  <input type="button" value="Отправить" onclick="submit()">

  <script>
    canvasElem.onmousemove = function(e) {
      let ctx = canvasElem.getContext('2d');
      ctx.lineTo(e.clientX, e.clientY);
      ctx.stroke();
    };

    async function submit() {
      let blob = await new Promise(resolve => canvasElem.toBlob(resolve, 'image/png'));
      let response = await fetch('/article/fetch/post/image', {
        method: 'POST',
        body: blob
      });

      // сервер ответит подтверждением и размером изображения
      let result = await response.json();
      alert(result.message);
    }

  </script>
</body>




// Функция submit() может быть переписана без async/await, например, так:
function submit() {
  canvasElem.toBlob(function(blob) {
    fetch('/article/fetch/post/image', {
      method: 'POST',
      body: blob
    })
      .then(response => response.json())
      .then(result => alert(JSON.stringify(result, null, 2)))
  }, 'image/png');
}
