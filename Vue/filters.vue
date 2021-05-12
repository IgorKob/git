<!-- http://code.mu/ru/javascript/framework/vue/book/prime/filters/ -->


<!-- 1. -->
<div id="app">
	<p>{{ message | capitalize }}</p>
</div>
let app = new Vue({
	el: '#app',
	data: {
		message: 'hello',
	},
	filters: {
		capitalize: function(str) {
			return str[0].toUpperCase() + str.slice(1);
		}
	}
});



<!-- 2. -->
<div id="app">
	<p>{{ message | lowercase | capitalize }}</p>
  <!-- <p>Hello</p> -->
</div>
let app = new Vue({
	el: '#app',
	data: {
		message: 'HELLO',
	},
	filters: {
		capitalize: function(str) {
			return str[0].toUpperCase() + str.slice(1);
		},
		lowercase: function(str) {
			return str.toLowerCase();
		}
	}
});



<!-- 3. -->
<div id="app">
  <p v-bind:id="str | formatId">Абзац</p>
	<!-- <p id="header-block">Абзац</p>      -->
</div>
let app = new Vue({
	el: '#app',
	data: {
		str: 'header',
	},
	filters: {
		formatId: function(value) {
			return value + '-block';
		}
	}
});



<!-- 4. -->
<!-- {{ message | myFilter('str1', 'str2') }} - эквивалентен такому вызову: myFilter(message, 'str1', 'str2') -->
<div id="app">
  <p v-bind:id="str | formatId('block')">Абзац</p>
	<!-- <p id="header-block">Абзац</p> -->
</div>
let app = new Vue({
	el: '#app',
	data: {
		str: 'header',
	},
	filters: {
		formatId: function(value, postfix) {
			return value + '-' + postfix;
		}
	}
});
