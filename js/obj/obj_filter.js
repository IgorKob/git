... функція, яка має два параметри: ordersі cost. Поверніть усі замовлення, які перевищують вартість.
expensiveOrders({ "a": 3000, "b": 200, "c": 1050 }, 1000)
// ➞ { "a": 3000, "c": 1050 }
expensiveOrders({ "Gucci Fur": 24600, "Teak Dining Table": 3200, "Louis Vutton Bag": 5550, "Dolce Gabana Heels": 4000 }, 20000)
// ➞ { "Gucci Fur": 24600 }
expensiveOrders({ "Deluxe Burger": 35, "Icecream Shake": 4, "Fries": 5 }, 40)
// ➞ {}
//kim
function expensiveOrders(orders, cost) {
	let obj = {};
	for ( const [key, value] of Object.entries(orders) ) {
		value >= cost ? obj[key] = value : obj;
	}
	return obj;
}

//
const expensiveOrders = (orders, cost) => Object.fromEntries(
	Object.entries(orders).filter(v => v[1] > cost));
//
function expensiveOrders(orders, cost) {
	return Object.fromEntries(Object.entries(orders).filter(([key, val]) => val > cost))
}
//
function expensiveOrders(orders, cost) {
	Object.keys(orders).forEach(i => {
		if(orders[i] < cost) delete orders[i]
	});
	return orders;
}
//
function expensiveOrders(orders, cost) {
	let expensives = {}
	for (const key in orders) {
		if (orders[key] > cost) {
			expensives[key] = orders[key];
		}
	}
	return expensives;
}
