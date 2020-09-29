JavaScript підтримує різні типи циклів:
for - кілька разів перебирає блок коду
for/in - циклічні властивості об'єкта
for/of - циклічні значення через ітерабельний об'єкт (arr)
while - цикли через блок коду, коли задана умова є істинною
do/while - також проходить цикл через блок коду, коли вказана умова є істинною

........
let i = 0;
while (i<10) {
  console.log(i);
  i++;
}

.......
do {
  text += "<br>The number is " + i;
  i++;
}
while (i < 10);

........
for (i = 0; i < 10; i++) {
  if (i === 3) { continue; }                // пропускає і цикл продовжується
  if (i === 8) { break; }                   // закінчує цикл
  text += "The number is " + i + "<br>";
}

..........
for (x in person) {
  txt += person[x] + " ";
}


...........
for (x of person) {
  txt += x + " ";
}
