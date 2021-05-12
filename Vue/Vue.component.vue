<!-- 1. -->
<div id="app">
  <my-component></my-component>
</div>

Vue.component('my-component', {
	template: '<div>Пользовательский компонент!</div>',
});

let app = new Vue({
	el: '#app',
});



<!-- 2. -->
<div id="app">
  <my-component name="Вася"></my-component>
</div>

Vue.component('my-component', {
	props: ['name'],
	template: '<div>Привет, {{ name }}!</div>',
});

let app = new Vue({
	el: '#app',
});


<!-- 3. -->
<div id="app">
	<my-component name="Вася" surname="Иванов"></my-component>
</div>
Vue.component('my-component', {
	props: ['name', 'surname'],
	template: '<div>Привет, {{ name }} {{ surname }}!</div>',
});

let app = new Vue({
	el: '#app',
});
