// https://flaviocopes.com/how-to-render-html-react/
// Як відобразити HTML в React

// 1.  Перше рішення: використовувати dangerouslySetInnerHTML
// Ви можете використовувати dangerouslySetInnerHTMLатрибут елемента HTML, щоб додати рядок HTML всередину його вмісту:
<div
  dangerouslySetInnerHTML={{
    __html: props.house.description
  }}></div>
// 
<div
  dangerouslySetInnerHTML={{
    __html: '<p>test</p>'
  }}></div>

// 2.  Друге рішення: використовуйте сторонні бібліотеки
// Є багато бібліотек, які реалізують надану функціональність dangerouslySetInnerHTML простіше.

// Однією з них є react-html-parserбібліотека.
// https://github.com/wrakky/react-html-parser