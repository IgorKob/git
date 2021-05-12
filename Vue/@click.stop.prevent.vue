https://ru.vuejs.org/v2/guide/events.html#%D0%9C%D0%BE%D0%B4%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%82%D0%BE%D1%80%D1%8B-%D1%81%D0%BE%D0%B1%D1%8B%D1%82%D0%B8%D0%B9


<!-- полный синтаксис -->
<a v-on:click="doSomething"> ... </a>

<!-- сокращённая запись -->
<a @click="doSomething"> ... </a>

<!-- сокращённая запись с динамическим именем события (2.6.0+) -->
<a @[event]="doSomething"> ... </a>



можно использовать динамические аргументы для привязки обработчика к динамическому имени события:
<a v-on:[eventName]="doSomething"> ... </a>
<a v-on:focus="doSomething"> ... </a>


<!-- событие click не будет всплывать дальше -->
<a v-on:click.stop="doThis"></a>

<!-- событие submit больше не будет перезагружать страницу -->
<form v-on:submit.prevent="onSubmit"></form>

<!-- модификаторы можно объединять в цепочки -->
<a v-on:click.stop.prevent="doThat"></a>

<!-- и использовать без указания метода-обработчика -->
<form v-on:submit.prevent></form>

<!-- можно отслеживать события в режиме capture, т.е. событие, нацеленное -->
<!-- на внутренний элемент, обрабатывается здесь до обработки этим элементом -->
<div v-on:click.capture="doThis">...</div>

<!-- вызов обработчика только в случае наступления события непосредственно -->
<!-- на данном элементе (то есть не на дочернем компоненте) -->
<div v-on:click.self="doThat">...</div>

<!-- Событие click сработает только 1 раз -->
<a v-on:click.once="doThis"></a>


<!-- по умолчанию событие scroll (при прокрутке) произойдёт -->
<!-- незамедлительно, вместо ожидания окончания `onScroll`  -->
<!-- на случай, если там будет `event.preventDefault()`     -->
<div v-on:scroll.passive="onScroll">...</div>
Не используйте вместе .passive и .prevent, потому что .prevent будет проигнорирован и
браузер возможно покажет предупреждение. Помните, что .passive сообщает браузеру,
что вы не хотите предотвращать поведение по умолчанию для события.


<!-- вызвать `vm.submit()` только если `key` будет `Enter` -->
<input v-on:keyup.enter="submit">
<input v-on:keyup.13="submit">
.enter
.tab
.delete (ловит как «Delete», так и «Backspace»)
.esc
.space
.up
.down
.left
.right
.ctrl
.alt
.shift
.meta


<!-- сработает, только когда нажат Ctrl и не нажаты никакие другие клавиши -->
<button v-on:click.ctrl.exact="onCtrlClick">A</button>

<!-- сработает, только когда не нажаты никакие системные модификаторы -->
<button v-on:click.exact="onClick">A</button>





При использовании модификаторов порядок имеет значение, потому что код генерируется в том же порядке.
Поэтому v-on:click.prevent.self будет предотвращать все клики, в то время как v-on:click.self.prevent
будет предотвращать клики только на самом элементе.
