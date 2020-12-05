// https://reactgo.com/use-https-react-app/
// Щоб використовувати https у додатку response, нам потрібно додати змінну середовища HTTPS=trueперед npm start командою.
HTTPS=true npm start
// Якщо не подобається додавати змінну середовища кожного разу під час запуску сервера, ви можете безпосередньо включити її до scriptsоб'єктів у package.jsonфайлі.
{
   "start": "HTTPS=true react-scripts start"
}