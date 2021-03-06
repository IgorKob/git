..................class
class Car {
  constructor(brand) {
    this.carname = brand;
  }
}
mycar = new Car("Ford");



............ extends
Щоб створити спадок класу, використовуйте extends ключове слово.
<p id="demo"></p>
<script>
class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return 'I have a ' + this.carname;
  }
}
class Model extends Car {                  клас під назвою "Модель", який успадкує методи від класу "Автомобіль":
  constructor(brand, mod) {
    super(brand);                          отримуємо доступ до батьківських властивостей та методів.
    this.model = mod;
  }
  show() {
    return this.present() + ', it is a ' + this.model;
  }
}
mycar = new Model("Ford", "Mustang");
document.getElementById("demo").innerHTML = mycar.show();
</script>






// Крок 1: Використовуємо конструктор функції для створення об'єкта Person
function Person(name, age, height, weight) {
// Додаємо властивості об'єкта за замовчуванням, використовуючи this
 this.name = name;
 this.age = age;
 this.height = height;
 this.weight = weight;
 // Додаємо метод для отримання властивості name
 this.getName = function() {
  return this.name;
 }
}
.....
  // Використання класу JavaScript для створення об'єкта Person
  class Person {
   constructor(name, age, height, weight) {
   // Додаємо властивості об'єкта за замовчуванням
    this.name = name;
    this.age = age;
    this.height = height;
    this.weight = weight;
   }
   // Додаємо метод для отримання властивості name
   getName() {
    return this.name;
   }
  }
.....

 // Крок 2: Створюємо два примірника об'єкта Person, ivanov та petrov
 let ivanov = new Person('Іванов', 25, 195, 105);
 let petrov = new Person('Петров', 30, 180, 72);
 console.log(ivanov.getName()) // Вивід: Іванов
 console.log(petrov.getName()) // Вивід: Петров
 // Крок 3: Додаємо властивість статі тільки примірнику ivanov та виводимо її
 ivanov.gender = 'чоловічий';
 console.log(ivanov.gender); // Вивід: чоловічий
 // при спробі записати стать для примірника petrov, вивід буде undefined, оскільки властивість «gender» є тільки в примірнику ivanov
 // Крок 4: Використання прототипу об'єкта для додавання властивості статі в об'єкт Person
 Person.prototype.gender = 'some gender';
 // пробуємо знову записати стать для примірника petrov
 console.log(petrov.gender); // Вивід: 'some gender'
 // Причина: додавання «gender» до прототипу Person автоматично додало його в усі екземпляри
 // Крок 5: Використання прототипу об'єкта для додавання методу, щоб отримати властивість age для прототипу об'єкта Person
 Person.prototype.getAge = function () {
  return this.age;
 }
 // отримуємо вік ivanov та petrov
 console.log(ivanov.getAge()) // 25
 console.log(petrov.getAge()) // 30
</script>
.................................
Приклад 1: Клас з використанням конструктора
<script>
 class MyClass {
  // Використовуємо конструктор для додавання властивостей класу
  constructor(message = 'Hello world!') {
   this.message = message;
  }
  // Додаємо метод класу
  printMessage() {
   return this.message;
  }
 }
 // Створюємо екземпляр класу MyClass
 const instanceOfMyClass = new MyClass();
 console.log(instanceOfMyClass.printMessage()); // Вивід: 'Hello world!'
</script>

Приклад 2: Клас без використання конструктора
<script>
 class MyClass {
  // Додаємо метод класу
  printMessage() {
   return 'Hello world!';
  }
 }
 // Створюємо екземпляр класу MyClass
 const instanceOfMyClass = new MyClass();
 console.log(instanceOfMyClass.printMessage()); // Вивід: 'Hello world!'
</script>




............................Додаємо новий метод
// Створюємо новий клас під назвою MyClass
 class NewClass {
  // Додаємо дві властивості класу, classPropOne і classPropTwo
  constructor(classPropOne, classPropTwo) {
   this.classPropOne = classPropOne;
   this.classPropTwo = classPropTwo;
  }
  // Додаємо метод класу з ім'ям someClassMethod
  someClassMethod() {
   return this.classPropOne;
  }
  // Додаємо метод класу з ім'ям anotherClassMethod
  anotherClassMethod() {
   return this.classPropTwo;
  }
 }
 .....
 // Додаємо новий метод з ім'ям newClassMethod в клас NewClass
 NewClass.prototype.newClassMethod = function() {
  return this.classPropOne + ' та ' + this.classPropTwo;
 }
 // Створюємо примірник NewClass під назвою foo
 let foo = new NewClass('foo', 'bar');
 console.log(foo.newClassMethod()); // Вивід: 'foo та bar'





 ...........................................Успадкування або розширення класів.
 // створюємо суперклас Vehicle
 class Vehicle {
  constructor(name, condition, speed) {
   this.name = name;
   this.condition = condition;
   this.speed = speed;
  }
 }
 // створюємо підклас Car
 class Car extends Vehicle {
  constructor(name, condition, speed, numOfWheels) {
   // Викликаємо функцію super() з усіма параметрами, необхідними для класу Vehicle
   super(name, condition, speed);
   this.numOfWheels = numOfWheels;
  }
  // Додаємо метод для виводу всіх властивостей
  printInfo() {
   return `Назва: ${this.name}, Стан: ${this.condition}, Макс. швидкість: ${this.speed}, Коліс: ${this.numOfWheels}`;
  }
 }
 // Створюємо екземпляр класу Car
 const tesla = new Car('Tesla', 'новий', 280, 4);
 console.log(tesla.printInfo()); // Вивід: 'Назва: Tesla, Стан: новий, Макс. швидкість: 280, Коліс: 4'
......
2222222222222222222222222222222222222222222222222222222222222









................................Відкриті поля і методи
class Vehicle {
  // Оголошуємо всі властивості безпосередньо, як відкриті за замовчуванням
  name = 'Автомобіль';
  condition = 'Б/в';
  speed = 220;
  // Всі методи нижче створені як публічні за замовчуванням
  vehicleName(name) {
   this.name = name;
  }
  vehicleCondition(condition) {
   this.condition = condition;
  }
  vehicleSpeed(speed) {
   this.speed = speed;
  }
 }
 .........
 Синтаксис для створення закритих полів простий, досить вказати перед ім’ям властивості #.
          Клас з відкритими і закритими властивостями
          class MyClass {
            // створюємо відкриту властивість
            foo = 'Це відкрита властивість';
            // Створюємо закриту властивість. Не забудьте почати з #
            #bar = 'Це закрита властивість';
            // Додаємо метод для доступу до публічної властивості foo
            getFoo() {
             return this.foo;
            }
            // Додаємо метод для доступу до закритої властивості bar
            getBar() {
             // Не забудьте використовувати повне ім'я властивості, включаючи #
             return this.#bar;
            }
            // Додаємо метод для зміни закритої властивості bar
            changeBar(text) {
             // Не забудьте використовувати повне ім'я властивості, включаючи #
             this.#bar = text;
            }
           }
           // Створюємо екземпляр класу MyClass
           const classInstanceOne = new MyClass();
           // Спробуємо побачити в лозі відкриту властивість foo за допомогою методу getFoo()
           console.log(classInstanceOne.getFoo()); // Вивід: Це відкрита властивість
           // Спробуємо побачити в лозі закриту властивість bar за допомогою методу getBar()
           console.log(classInstanceOne.getBar()); // Вивід: Це закрита властивість
           // Спробуємо побачити в лозі відкриту властивість foo безпосередньо
           console.log(classInstanceOne.foo); // Вивід: Це відкрита властивість
           // Спробуємо побачити в лозі закриту властивість bar безпосередньо
           console.log(classInstanceOne.#bar); // Вивід: SyntaxError: Undefined private field undefined: must be declared in an enclosing class
           // Використовуємо метод changeBar, щоб змінити закриту властивість bar
           classInstanceOne.changeBar('Це новий текст');
           // Спробуємо знову побачити в лозі закриту властивість bar з методом getBar()
           console.log(classInstanceOne.getBar()); // Вивід: Це новий текст
           ............
................................Статичні властивості і методи
// Клас зі статичними властивістю і методом
 class MyClass {
  // Оголошуємо статичну властивість
  static foo = 'Статична властивість';
  // Оголошуємо статичний метод
  static getFoo() {
   // Повертаємо значення статичної властивості foo
   return MyClass.foo;
  }
 }
 // Спробуємо отримати доступ до статичної властивості foo безпосередньо в MyClass
 console.log(MyClass.foo); // Вивід: Статична властивість
 // Спробуємо отримати доступ до статичної властивості foo, використовуючи статичний метод getFoo() в MyClass
 console.log(MyClass.getFoo()); // Вивід: Статична властивість
 // Створимо екземпляр класу MyClass
 const myClassInstance = new MyClass();
 // Спробуємо отримати доступ до статичної властивості foo в myClassInstance
 console.log(myClassInstance.getFoo()); // Вивід: TypeError: myClassInstance.getFoo is not a function
 console.log(myClassInstance.foo); // Вивід: undefined
...........




........................Гетер і сетер методи доступу
class User {
 constructor(username) {
  // Це викличе сетер
  this.username = username;
 }
 // Створюємо гетер для властивості username
 get username() {
  console.log(`Ваш юзернейм ${this._username}.`);
 }
 // Створюємо сетер для властивості username
 set username(newUsername) {
  // перевіряємо довжину newUsername
  if (newUsername.length === 0) {
   // Показати повідомлення, якщо ім'я користувача занадто коротке
   console.log("Ім'я занадто коротке");
  }
  // В іншому випадку присвоюємо newUsername і використовуйте його в якості значення для юзернейм
  this._username = newUsername;
 }
}
// Створюємо екземпляр класу User
const userOne = new User('Степан');
// Отримуємо доступ до властивості username користувача userOne. Це автоматично викличе гетер метод для властивості username
userOne.username; // Вивід: Ваш юзернейм Степан
// Спробуємо створити екземпляр User без імені користувача. Це автоматично викличе сетер метод для властивості username
const userTwo = new User(''); // Ім'я занадто коротке
..............
