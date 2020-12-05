// https://reactgo.com/react-router-uselocation-hook/
// https://reactgo.com/react-get-query-params/
// useLocation допомагає нам отримати доступ до об’єкта розташування, 
// який містить поточне розташування URL-адреси, властивість пошуку.


// I.
// Передавання параметрів запиту
<Link to={{pathname:"/users",search: "?name=sai"}}>Sai</Link>
// або
<Link to="/users/?name=sai">Sai</Link>


// 1.  ./Users.js
// https://reactgo.com/users?name=igor
// location.pathname  -> /users
// new URLSearchParams(location.search).get('name')  -> igor
import React from 'react';
import {useLocation} from "react-router-dom";

function Users() {
  const location = useLocation();
  console.log(location);

  return (
    <div>
      <h1>Users page</h1>
     <p>{location.pathname}</p>         {/* /users */}
      <p>{new URLSearchParams(location.search).get('name')}</p>   {/* igor */}
    </div> 
  );
}



// 2.            Отримання поточного маршруту в компонентах класу   
// ./About.js
import React from "react";
import { withRouter } from "react-router-dom";

class About extends React.Component {
  render() {
    console.log(this.props.location.pathname); // path is /about
    return (
      <div>
        <h2>About</h2>
      </div>
    );
  }
}

export default withRouter(About);


// II.
// localhost:3000/items?name=pen
// 1.  ./Items.js
import React from 'react';
import {useLocation} from "react-router-dom";

export default function Items() {

  const search = useLocation().search;
  const name = new URLSearchParams(search).get('name');

  return (
    <div>
      <h1>Items page</h1>
      <p>{name}</p>
    </div>
  );
}


// 2.   У реакційному маршрутизаторі v4 ми можемо отримати доступ до даних параметрів запиту з URL-адреси за допомогою props.location.searchвластивості.
// ./Items.js
import React from 'react';

export default function Items(props) {

  const search = props.location.search;
  const name = new URLSearchParams(search).get('name');

  return (
    <div>
      <h1>Items page</h1>
      <p>{name}</p>
    </div>
  );
}


// 3.  У компонентах на основі класів ви можете отримати до них доступ таким чином.
// ./Items.js
import React, { Component } from "react";

class Items extends Component {
  render() {
    const search = this.props.location.search;
    const name = new URLSearchParams(search).get("name");

    return (
      <div>
        <h1>Items page</h1>
        <p>{name}</p>
      </div>
    );
  }
}

export default Items;




// III.         Кілька параметрів запиту
// localhost:3000/items?name=pen&id=12
./Items.js
import React from 'react';
import {useLocation} from "react-router-dom";

export default function Items() {

  const search = useLocation().search;
  const name = new URLSearchParams(search).get('name');
  const id = new URLSearchParams(search).get('id');

  return (
    <div>
      <h1>Items page</h1>
      <p>{id}</p>
      <p>{name}</p>
    </div>
  );
}