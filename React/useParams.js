// https://reactgo.com/react-router-useparams-hook/
// https://reactgo.com/react-get-url-params/
// useParams() - Крюк допомагає нам отримати доступ до параметрів URL з поточного маршруту.


// 1.
// є такий маршрут у нашому додатку для реагування.
<Route path="/users/:id" component={Users} />
// Тепер ми можемо отримати доступ до :id значення параметра всередині Users компонента за допомогою useParams() гачка.
// ./Users.js
import React from "react";
import { useParams } from "react-router-dom";

export default function Users() {
  const { id } = useParams();

  return (
    <div>
      <h1>User id is {id}</h1>
    </div>
  );
}


// 11.  У React router v4 ви можете отримати до нього доступ за допомогою props.match.params.id.
// ./Users.js
import React from "react";
import { useParams } from "react-router-dom";
// import { withRouter } from "react-router-dom";

export default function Users(props) {
  const { id } = props.match.params;

  return (
    <div>
      <h1>User id is {id}</h1>
    </div>
  );
}

// export default withRouter(Users);

// 111.  У компонентах на основі класів ви можете отримати до них доступ таким чином.
// ./Users.js
import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Users extends Component {
  render() {
    const { id } = this.props.match.params;

    return (
      <div>
        <h1>User id is {id}</h1>
      </div>
    );
  }
}

export default withRouter(Users);