// https://react-bootstrap.netlify.app/
// https://react-bootstrap.github.io/components/carousel/
npm install --save bootstrap
yarn add bootstrap
// ./src/index.js
import 'bootstrap/dist/css/bootstrap.css';



//                               bootstrap scss 
// I.
// ./src/custom.scss
// Замінити змінні за замовчуванням перед імпортом
$body-bg: #000;
// Імпорт Bootstrap та його змінних за замовчуванням
@import '~bootstrap/scss/bootstrap.scss';

// II.
// ./src/index.js
import './custom.scss';