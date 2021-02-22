const products = `[
    {
       "id": 1,
       "name": "картофель",
       "groupId": 21,
       "groupName": "овощи и фрукты"
    },
    {
       "id": 2,
       "name": "помидоры",
       "groupId": 21,
       "groupName": "овощи и фрукты"
    },
    {
       "id": 3,
       "name": "клубника",
       "groupId": 21,
       "groupName": "овощи и фрукты"
    },
    {
       "id": 4,
       "name": "шоколад",
       "groupId": 8,
       "groupName": "кондитерские изделия"
    },
    {
       "id": 5,
       "name": "томаты",
       "groupId": 21,
       "groupName": "овощи и фрукты"
    },
    {
       "id": 6,
       "name": "яблоко",
       "groupId": 21,
       "groupName": "овощи и фрукты"
    },
    {
       "id": 7,
       "name": "пиво",
       "groupId": 14,
       "groupName": "алкогольные напитки"
    },
    {
       "id": 8,
       "name": "арахис",
       "groupId": 22,
       "groupName": "орехи и сухофрукты"
    },
    {
       "id": 9,
       "name": "туалетная бумага",
       "groupId": 17,
       "groupName": "домашнее хозяйство"
    },
    {
       "id": 10,
       "name": "ягоды",
       "groupId": 21,
       "groupName": "овощи и фрукты"
    },
    {
       "id": 11,
       "name": "салат",
       "groupId": 21,
       "groupName": "овощи и фрукты"
    },
    {
       "id": 12,
       "name": "гранола",
       "groupId": 6,
       "groupName": "бакалея"
    },
    {
       "id": 13,
       "name": "папки",
       "groupId": 17,
       "groupName": "домашнее хозяйство"
    },
    {
       "id": 14,
       "name": "ватные диски",
       "groupId": 17,
       "groupName": "домашнее хозяйство"
    },
    {
       "id": 15,
       "name": "кофе",
       "groupId": 13,
       "groupName": "чай и кофе"
    },
    {
       "id": 16,
       "name": "бананы",
       "groupId": 21,
       "groupName": "овощи и фрукты"
    },
    {
       "id": 17,
       "name": "лаваш",
       "groupId": 7,
       "groupName": "выпечка"
    },
    {
       "id": 18,
       "name": "баклажаны",
       "groupId": 21,
       "groupName": "овощи и фрукты"
    },
    {
       "id": 19,
       "name": "шампунь",
       "groupId": 17,
       "groupName": "домашнее хозяйство"
    },
    {
       "id": 20,
       "name": "вода минеральная",
       "groupId": 12,
       "groupName": "напитки"
    },
    {
       "id": 21,
       "name": "кукуруза",
       "groupId": 21,
       "groupName": "овощи и фрукты"
    },
    {
       "id": 22,
       "name": "овсянка",
       "groupId": 6,
       "groupName": "бакалея"
    },
    {
       "id": 23,
       "name": "тампоны",
       "groupId": 17,
       "groupName": "домашнее хозяйство"
    },
    {
       "id": 24,
       "name": "растительное молоко",
       "groupId": 4,
       "groupName": "молочные продукты"
    },
    {
       "id": 25,
       "name": "объединить список",
       "groupId": 1,
       "groupName": "разное"
    },
    {
       "id": 26,
       "name": "жвачку",
       "groupId": 2,
       "groupName": "кулинария"
    },
    {
       "id": 27,
       "name": "огурец",
       "groupId": 21,
       "groupName": "овощи и фрукты"
    },
    {
       "id": 28,
       "name": "перец",
       "groupId": 21,
       "groupName": "овощи и фрукты"
    },
    {
       "id": 29,
       "name": "груша",
       "groupId": 21,
       "groupName": "овощи и фрукты"
    },
    {
       "id": 30,
       "name": "итальянские травы",
       "groupId": 11,
       "groupName": "приправы"
    },
    {
       "id": 31,
       "name": "авокадо",
       "groupId": 21,
       "groupName": "овощи и фрукты"
    },
    {
       "id": 32,
       "name": "персики",
       "groupId": 21,
       "groupName": "овощи и фрукты"
    },
    {
       "id": 33,
       "name": "чай с травами",
       "groupId": 13,
       "groupName": "чай и кофе"
    },
    {
       "id": 34,
       "name": "клей",
       "groupId": 17,
       "groupName": "домашнее хозяйство"
    },
    {
       "id": 35,
       "name": "стиральный порошок",
       "groupId": 17,
       "groupName": "домашнее хозяйство"
    },
    {
       "id": 36,
       "name": "травяной чай",
       "groupId": 13,
       "groupName": "чай и кофе"
    },
    {
       "id": 37,
       "name": "средство для прочистки труб",
       "groupId": 17,
       "groupName": "домашнее хозяйство"
    },
    {
       "id": 38,
       "name": "картошка",
       "groupId": 21,
       "groupName": "овощи и фрукты"
    },
    {
       "id": 39,
       "name": "петрушка",
       "groupId": 21,
       "groupName": "овощи и фрукты"
    },
    {
       "id": 40,
       "name": "соль",
       "groupId": 11,
       "groupName": "приправы"
    },
    {
       "id": 41,
       "name": "морковь",
       "groupId": 21,
       "groupName": "овощи и фрукты"
    },
    {
       "id": 42,
       "name": "гель для душа",
       "groupId": 17,
       "groupName": "домашнее хозяйство"
    },
    {
       "id": 43,
       "name": "горшок для гибискуса",
       "groupId": 17,
       "groupName": "домашнее хозяйство"
    },
    {
       "id": 44,
       "name": "очиститель труб",
       "groupId": 17,
       "groupName": "домашнее хозяйство"
    }
 ]`;
//  export const startProducts = JSON.parse(products);

const startProducts0 = JSON.parse(products);
const arr = [...startProducts0];

for (let i = 1; i <= 22 ; i++) {
   for (let j = 0; j <= 10000; j++) {
     arr.push({id: `${i}_${j}`, name: `name_${i}_${j}`, groupId: i, groupName: `groupName_${i}_${j}`})
   }   
}
export const startProducts = arr;

 const groups = `[
     {"id":1,"name":"разное","img":"other.png"},
     {"id":2,"name":"кулинария","img":"cookery.png"},
     {"id":3,"name":"деликатесы","img":"delicatessen.png"},
     {"id":4,"name":"молочные продукты","img":"milk.png"},
     {"id":5,"name":"морские продукты","img":"sea-foods.png"},
     {"id":6,"name":"бакалея","img":"cereal.png"},
     {"id":7,"name":"выпечка","img":"bakery.png"},
     {"id":8,"name":"кондитерские изделия","img":"sweets.png"},
     {"id":9,"name":"консервированные продукты","img":"canned-food.png"},
     {"id":10,"name":"масла","img":"oils.png"},
     {"id":11,"name":"приправы","img":"spices.png"},
     {"id":12,"name":"напитки","img":"drinks.png"},
     {"id":13,"name":"чай и кофе","img":"coffee-and-tea.png"},
     {"id":14,"name":"алкогольные напитки","img":"alcohol.png"},
     {"id":15,"name":"табачные изделия","img":"tobacco.png"},
     {"id":16,"name":"сыры","img":"cheese.png"},
     {"id":17,"name":"домашнее хозяйство","img":"household.png"},
     {"id":18,"name":"аптека","img":"pharmacy.png"},
     {"id":19,"name":"замороженные продукты","img":"frozen-food.png"},
     {"id":20,"name":"домашние питомцы","img":"pets.png"},
     {"id":21,"name":"овощи и фрукты","img":"vegetables&fruits.png"},
     {"id":22,"name":"орехи и сухофрукты","img":"nuts-and-dried-fruits.png"}
]`;
export const startGroups = JSON.parse(groups);