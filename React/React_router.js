// https://reactrouter.com/web/guides/quick-start
npm install --save react-router-dom
yarn add react-router-dom

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
// import { BrowserRouter as Router } from "react-router-dom";  // <Router></Router>

function App() {
  return <h1>Hello React Router</h1>;
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);





// 

<Link to="/">Home</Link>
// <a href="/">Home</a>

//Це <NavLink> особливий тип, <Link>який може стилізувати себе як “активний”, коли його to підтримка 
// відповідає поточному розташуванню.
<NavLink to="/react" activeClassName="hurray">React</NavLink>
<NavLink to="/react" activeStyle={{fontWeight: "bold", color: "red"}}>React</NavLink>
// <a href="/react" className="hurray">React</a>
// <a href="/react">React</a>


// exact - клас / стиль застосовуватиметься лише в тому випадку, якщо розташування точно відповідає.
<NavLink exact to="/events/">Events</NavLink>


//strict - кінцева скісна риска на місці pathname буде врахована при визначенні місце розташування поточній URL-адресі
<NavLink strict to="/events/">Events</NavLink>



<Redirect to="/login" />

let match = useRouteMatch();        
<Link to={`${match.url}/components`}>Components</Link>

let { topicId } = useParams();
<Route path={`${match.path}/:topicId`}>
  <Topic />
</Route>


useHistory - дає доступ до history прикладу
useLocation - повертає location об'єкт, який представляє поточний URL
useParams - повертає об'єкт пар ключ / значення параметрів URL. Використовуйте його для доступу match.params до поточного <Route>.
useRouteMatch - щоб відповідати поточної URL таким же чином , що <Route>. Це в основному корисно для отримання доступу до даних збігу без фактичного надання a <Route>.


// 1.
<Router>
<div>
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/about">About</Link>
    </li>
    <li>
      <Link to="/dashboard">Dashboard</Link>
    </li>
  </ul>

  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/about">
      <About />
    </Route>
    <Route path="/dashboard">
      <Dashboard />
    </Route>
  </Switch>
</div>
</Router>


// 2.                    useParams()    
// в h3 виводить кінцівку адресу з адресної строки
<Router>
      <Link to="/netflix">Netflix</Link>
      <Link to="/zillow-group">Zillow Group</Link>
      <Link to="/yahoo">Yahoo</Link>
      <Link to="/modus-create">Modus Create</Link>

      <Switch>
        <Route path="/:id" children={<Child />} />
      </Switch>
</Router>

function Child() {

let { id } = useParams();

  return (
    <div>
      <h3>ID: {id}</h3>
    </div>
  );
}


// 3.            useRouteMatch()
// https://reactrouter.com/web/example/nesting
// декілька рівнів навігації
<Router>
      <Link to="/">Home</Link>
      <Link to="/topics">Topics</Link>

  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/topics">
      <Topics />
    </Route>
  </Switch>
</Router>

function Home() {
  return (
    <div>
     <h2>Home</h2>
    </div>
  );
}

function Topics() {
  let { path, url } = useRouteMatch();
  return (
    <Link to={`${url}/rendering`}>Rendering with React</Link>
    <Link to={`${url}/components`}>Components</Link>
    <Link to={`${url}/props-v-state`}>Props v. State</Link>

    <Switch>
      <Route exact path={path}>
        <h3>Please select a topic.</h3>
      </Route>
      <Route path={`${path}/:topicId`}>
        <Topic />
      </Route>
    </Switch>
  );
}

function Topic() {
let { topicId } = useParams();
return (
<div>
<h3>{topicId}</h3>
</div>
);
}



// 4.          Redirect and '*'-коли немає відповідного адресу
<Router>
      <Link to="/">Home</Link>
      <Link to="/old-match">Old Match, to be redirected</Link>
      <Link to="/will-match">Will Match</Link>
      <Link to="/will-not-match">Will Not Match</Link>
      <Link to="/also/will/not/match">Also Will Not Match</Link>

  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/old-match">
      <Redirect to="/will-match" />
    </Route>
    <Route path="/will-match">
      <WillMatch />
    </Route>
    <Route path="*">
      <NoMatch />
    </Route>
  </Switch>
</Router>


// 5.              sidebar , main
// https://reactrouter.com/web/example/sidebar
const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => <div>home!</div>,
    main: () => <h2>Home</h2>
  },
  {
    path: "/bubblegum",
    sidebar: () => <div>bubblegum!</div>,
    main: () => <h2>Bubblegum</h2>
  },
  {
    path: "/shoelaces",
    sidebar: () => <div>shoelaces!</div>,
    main: () => <h2>Shoelaces</h2>
  }
];

<Switch>
  {routes.map((route, index) => (
    <Route
      key={index}
      path={route.path}
      exact={route.exact}
      children={<route.sidebar />}
    />
  ))}
</Switch>
  <Switch>
  {routes.map((route, index) => (
    <Route
      key={index}
      path={route.path}
      exact={route.exact}
      children={<route.main />}
    />
  ))}
</Switch>



// 6.        modal-gallery
// https://reactrouter.com/web/example/modal-gallery

