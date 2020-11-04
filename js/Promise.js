1.)
  const sleep = ms => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(), ms)
  })
}

sleep(2000).then(() => console.log('2s'))
sleep(5000).then(() => console.log('5s'))

2.)
  Promise.all([sleep(2000), sleep(5000)]).then(() => {
    console.log('Коли виконаються всі проміси тоді буде виведений цей текст')
  })

3.)
  Promise.race([sleep(2000), sleep(5000)]).then(() => {
    console.log('Проміси будуть виконуватися попорядку')
  })
