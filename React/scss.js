// $ npm install node-sass --save
// $ yarn add node-sass

@import 'styles/_colors.scss'; 
@import '~nprogress/nprogress';

// SASS_PATH=./node_modules;./src

@import './index.scss';
 
$primary-color: #525dce;
$primary-background: #222;

.Navigation {
  background-color: $primary-background;
 
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;

    li {
      margin: 10px 20px;
    }
   
  }
 

  a {
    text-decoration: none;
  }
 
  a,
  a:visited {
    color: #ffffff;
  }
 
  a:hover {
    color: $primary-color;
  }
}


// 2.  ./index.css - Цей імпорт додасть normalize.cssфайл до вашого проекту.
@import-normalize;    

