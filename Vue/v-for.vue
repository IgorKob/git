<div id="app">
  <my-component
  v-for="(value, index) in values"
  v-bind:name="value"
  v-bind:key="index"
  >
  </my-component>
</div>
Vue.component('my-component', {
	props: ['name'],
	template: '<div>Привет, {{ name }}!</div>',
});

let app = new Vue({
	el: '#app',
	data: {
		values: ['Коля', 'Вася', 'Петя'],
	}
});
