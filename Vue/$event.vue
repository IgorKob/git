Иногда в обработчиках необходим доступ к оригинальному событию DOM. Его можно передать в метод,
используя специальную переменную $event:

<div id="app">
	<button v-on:click="warn('Форма не может быть отправлена.', $event)">
		Отправить
	</button>
</div>
let app = new Vue({
	el: '#app',
	data: {
		message: '',
	},
	methods: {
		warn: function (message, event) {
			// Теперь у нас есть доступ к нативному событию:
			event.preventDefault();

			alert(message);
		}
	}
});
