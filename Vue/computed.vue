<!-- http://code.mu/ru/javascript/framework/vue/book/prime/computed-properties/ -->


<!-- 1. -->
<div id="app">
  <p>Изначальное сообщение: {{ message }}</p>
  <p>Сообщение задом наперед: {{ reversedMessage }}</p>
</div>
let app = new Vue({
	el: '#app',
	data: {
		message: 'hello',
	},
	computed: {
		reversedMessage: function() {
			return this.message.split('').reverse().join('');
		}
	}
});
