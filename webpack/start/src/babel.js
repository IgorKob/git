async function start() {
  return await Promise.resolve('async is working')
}

start().then(console.log)

//змінна для тесту, яка не використовується
const unused = 42


class Util {
  static id = Date.new()
}

console.log('Util id:', Util.id)
console.log(unused)
