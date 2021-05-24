<!-- https://github.com/vuejs/vue-cli -->
<!-- https://ru.vuejs.org/v2/guide/comparison.html -->


<!-- https://codesandbox.io/s/sleepy-hugle-v1gou?file=/index.html:0-346 -->
<!-- https://codesandbox.io/s/o29j95wx9 -->


<!-- styles -->
<!-- https://github.com/styled-components/vue-styled-components -->
<!-- https://github.com/egoist/vue-emotion -->
<!-- https://vue-loader-v14.vuejs.org/ru/features/css-modules.html -->
<!-- https://ru.vuejs.org/v2/guide/single-file-components.html -->


<!-- умова для додавання класу -->
<!-- <span v-bind:class="{done: todo.compoleted}">asd</span> -->

v-bind: 
or
:

v-on:
or
@


<!-- ./index.html -->
<h1>{{ title }}</h1>
<imput type='text' v-bind:placeholder='myPlaceholder' />
<p>{{ counter }}</p>
<imput type='button' v-on:click='counter++' value='Add' />

<imput 
  type='text' 
  v-on:click='myff' 
  v-on:keypress.enter='myAdd'     
  v-bind:value='inputValue' 
/>
<!-- or -->
<imput 
  type='text' 
  @click='myff' 
  @keypress.enter='myAdd'     
  :value='inputValue' 
/>
<!-- or -->
<imput 
  type='text' 
  v-model='inputValue'
  @keypress.enter='myAdd'     
/>
<imput type='button' v-on:click='myAdd' value='Add' />
<ul>
  <li v-for='el in myArr'>{{ el }}</li>
</ul>
<ul v-if='myArr.length !== 0'>
  <li v-for='(el, index) in myArr'>
    {{index}}.) {{ el }}
    <button v-on:click='myRemove(index, $event)'>Delete</button>
  </li>
  <li>Кількість ел.: {{myArr.length}}, Кількість помножена на 2: {{ myff2() }}</li>
  <li>Кількість ел.: {{myArr.length}}, Кількість помножена на 2: {{ myff2Computed }}</li>
</ul>
<p v-else>Not element!</p>
<p v-else-if='myArr.length === 0'>Not element!</p>
<p v-if='myArr.length === 0'>Not element!</p>



<!-- style -->
<h1 v-bind:style='{color: inputValue.length < 5 ? "red" : "blue"}'>{{title}}</h1>
<h1 :style='{color: inputValue.length < 5 ? "red" : "blue"}'>{{title}}</h1>
<h1 :style='{
  color: inputValue.length < 5 ? "red" : "blue",
  fontSize: inputValue.length < 3 ? "1rem" : "1.5rem"
}'>{{title}}</h1>

<style scoped>   // інкапсулює стилі в даному компоненті, додає id до класу і таким чином класи можуть мати однакові назви
</style>
<style lang='scss'>
  @import '~materialize-css/dist/css/materialize.min.css';
  @import 'assets/index.css';
</style>

<!-- class -->
<h1 v-bind:class='inputValue.length < 5 ? "myclass" : "myclass2"'>{{title}}</h1>
<h1 :class='inputValue.length < 5 ? "myclass" : "myclass2"'>{{title}}</h1>
<h1 :class='{
  "myclass": true,
  "myclass2": inputValue.length < 5
}'>{{title}}</h1>
<h1 :class='["myclass", {"myclass2": inputValue.length < 5}]'>{{title}}</h1>


<!-- ./main.js -->
const App = {
  data() {
    return {
      title: 'my title',
      myPlaceholder: 'add text',
      counter: 0,
      inputValue: '',
      myArr: ['asd1', 'asd2', 'asd3'], 
    }
  },
  <!-- data: () => ({
    title: 'my title',
    myPlaceholder: 'add text',
    counter: 0,
    inputValue: '',
    myArr: ['asd1', 'asd2', 'asd3'], 
  }), -->
  methods: {
    myff(event) {
      console.log('my value: ' + event.target.value);
      this.inputValue = event.target.value;
    },
    myAdd() {
      if (this.inputValue.length !== 0) {
        this.myArr.push(this.inputValue);
        this.inputValue = '';
      }
    },
    myRemove(index, event) {
      console.log('remove el: '+ index);
      this.myArr.splice(index, 1);
    },
    myff2() {
      return this.myArr.length * 2;
    },
  },
  computed: {         // для оптимізації, функції будуть виконуватися тільки коли значення, яке вони використовують поміняється (this.el)
    myffComputed2() {
      return this.myArr.length * 2;
    },
  },
  watch: {          // слідкує за змінами у змінній 
    inputValue(value) {                    // inputValue: '',  -> inputValue(value)
      console.log('new value: ' + value);
      if (value.length > 10) {
        console.log('new value if: ' + value);
        this.inputValue = '';
      }
    }
  }
}
Vue.createApp(App).mount('#app')




<!-- all derection -->
<h1>{{title}}</h1>
<h1 v-text='title'></h1>
<h1 v-once>{{title}}</h1>     // виводить тільки один раз і не змінює значення не залежно що значення помінялося
<h1 v-pre>{{title}}</h1>      // -> {{title}} виводить текст
<h1 v-html='myTitle'></h1>    // data: () => ({myTitle: '<span>My title</span>'})
  
<!-- для того щоб відображати одразу весь контент,
щоб не було видно {{content}} при загрузці
-->
<style>
  [v-cloak] {
    display: none;
  }
</style>
<main v-cloak>
  // my content
</main>



<!-- loop -->
<ul>
  <li v-for='(el, index) in arr'><b>{{index}}: {{el}}</b></li>
  <li v-for='(el, index) of arr'><b>{{index}}: {{el}}</b></li>
  <li 
    v-for='(el, index) of arr'
    v-bind:key='el.id'
    // or 
    :key='el.id'
  >
    <b>{{index}}: {{el}}</b>
  </li>
</ul>

<!-- if -->
<div v-if='content.length !== 0'>{{ content }}</div>
<div v-if='content.length'>{{ content }}</div>
<div v-else-if='content.length < 3'>{{ content }}</div>
<div v-else>{{ content }}</div>

<div v-show="arr.length === 0">Немає елементів</div>   // показує/приховує елемент



<ul v-for='(el, index) in arr'>
  <li @click='arr.splice(index, 1)'>
    {{el}} 
    <button @click='stopPropagation'>ok</button>
    or
    <button @click.stop>ok</button>
    or
    <button @click.prevent.stop>ok</button>
  </li>
</ul>
<!-- ./main.js -->
const App = {
  methods: {
    stopPropagation(event) {
      event.stopPropagation();   // при кліку, не дозволяє пошируватися на батьківський елемент 
    }
  }
}


<!-- ref -->
<input type='text' ref='myinput'/>
<!-- ./main.js -->
const App = {
  methods: {
    addElement() {
      console.log(this.$refs);
      console.log(this.$refs.myinput.value);
      this.$refs.myinput.value = '';
    }
  }
}


<!-- keys -->
v-on:click='myff()'
@click='myff()'
@keypress='myff()'
@keyup.shift.enter.exact='myff()'
@click.right.prevent='myff()'      // клік правою клавішею і викл. стандартне меню при натисканні
@click.stop='myff()'  
@click='myff(), myff2(el)'  


<!DOCTYPE html>
<html>
  <head>
    <title>My first Vue app</title>
    <script src="https://unpkg.com/vue"></script>
  </head>
  <body>
    <div id="app">
      {{ message }}
    </div>
    <script>
      var app = new Vue({
        el: "#app",
        data: {
          message: "Hello Vue!"
        }
      });
    </script>
  </body>
</html>






<!-- vue -->
<template>
  <div>
    <h1>title</h1>
  </div>
</template>
<script>
  import Asd from '@/layout/Asd'
  import Asd2 from '@/layout/Asd2'
  export default {
    name: 'myname-wrap',
    props: {},
    data() { return {title: 'mytitle'} },
    computed: {
      layout() {
        console.log(this.$route.meta);
        return (this.$route.meta.layout || 'empty')
      }
    },
    components: {},
    components: {
      Asd, Asd2
    },
    methods: {},
    watch: {},
    mounted() {}
  }
</script>
<style lang="scss">
  @import '~materialize-css/dist/css/materialize.min.css';
  @import 'assets/index.css';
</style>