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
