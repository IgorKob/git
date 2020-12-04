// https://reactgo.com/graphql-react-apollo-client/
// npm install apollo-boost react-apollo graphql


// 1.   ./index.js
// uri : Кінцева точка graphql, яку ми використовуємо для отримання даних.
// request : Для кожного запиту ми надсилаємо заголовок авторизації для підтвердження поточного користувача.
// Query означає отримання даних з API
// Mutation - оновлення, видалення або додавання даних.
import React from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./App";
import ApolloClient, { gql } from "apollo-boost";

const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  request: operation => {
    operation.setContext({
      headers: {
        authorization: `Bearer your-personal-access-token`
      }
    });
  }
});

client
  .query({
    query: gql`
      query GetnameandEmail {
        viewer {
          email
          name
        }
      }
    `
  })
  .then(res => console.log(res));

render(<App />, document.getElementById("root"));





// 2.   ./index.js 
// Підключіть клієнта до React  (ApolloProvider)
import React from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./App";
import ApolloClient, { gql } from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  request: operation => {
    operation.setContext({
      headers: {
        authorization: `Bearer your-personal-access-token`
      }
    });
  }
});

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);



// 3.  ./app.js
// Отримання даних із компонентів
// Параметр - це об'єкт, який містить три властивості завантаження, помилка, дані.
// loading: це правда, якщо запит все ще обробляється.
// error: вона містить дані, пов’язані з помилками, у випадку, якщо запит не вдався.
// data: Результат запиту доступний у цій властивості.
import React, { Component } from "react";
import "./App.css";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

const query = gql`
  {
    viewer {
      name
      email
    }
  }
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Query query={query}>
          {result => {
            if (result.loading) return <p>loading...</p>;
            if (result.error) return <p>{result.error.message}</p>;
            return (
              <div>
                <h1>Name: {result.data.viewer.name}</h1>
                <p>Email: {result.data.viewer.email}</p>
              </div>
            );
          }}
        </Query>
      </div>
    );
  }
}

export default App;





// 4.   ./my-repostiories.js
// Передача аргументів до Запитів
import React, { Component } from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

const reposQuery = gql`
  {
    viewer {
      repositories(first: 10) {
        edges {
          node {
            name
          }
        }
      }
    }
  }
`;

class Myrepositories extends Component {
  render() {
    return (
      <Query query={reposQuery}>
        {({ data, loading, error }) => {
          if (loading) return <p>loading...</p>;
          if (error) return <p>{error.message}</p>;
          return (
            <ul>
              <h2>First 10 repositories</h2>
              {data.viewer.repositories.edges.map(({ node }) => (
                <li key={node.name}>{node.name}</li>
              ))}
            </ul>
          );
        }}
      </Query>
    );
  }
}

export default Myrepositories;



// 5.   ./my-repostiories.js
// Передача аргументів із використанням змінних Query
import React, { Component } from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

const reposQuery = gql`
  query Myrepositories($first: Int!) {
    viewer {
      repositories(first: $first) {
        edges {
          node {
            name
          }
        }
      }
    }
  }
`;
class Myrepositories extends Component {
  render() {
    return (
      <Query query={reposQuery} variables={{ first: 10 }}>
        {({ data, loading, error }) => {
          if (loading) return <p>loading...</p>;
          if (error) return <p>{error.message}</p>;
          return (
            <div>
              <ul>
                <h2>First 10 repositories</h2>
                {data.viewer.repositories.edges.map(({ node }) => (
                  <li key={node.name}>{node.name}</li>
                ))}
              </ul>
            </div>
          );
        }}
      </Query>
    );
  }
}
export default Myrepositories;


// 6.
// Отримати більше даних
// fetchMore Функція приймає об'єкт з двома властивостями змінних і updateQuery.
// змінні : змінні, які нам потрібно передати до запиту GraphQL.
// updateQuery : Функція updateQuery використовується для злиття даних з новими даними та повторного відтворення компонента з оновленими даними.
<Query query={reposQuery} variables={{ first: 10 }}>
  {({ data, loading, error, fetchMore }) => {
    if (loading) return <p>loading...</p>;
    if (error) return <p>{error.message}</p>;

    let current = data.viewer.repositories.edges.length;

    return (
      <div>
        <ul>
          <h2>First {current}repositories</h2>
          {data.viewer.repositories.edges.map(({ node }) => (
            <li key={node.name}>{node.name}</li>
          ))}
        </ul>
        <button
          onClick={() => {
            fetchMore({
              variables: { first: current + 10 },
              updateQuery: (prev, { fetchMoreResult }) => {
                if (!fetchMoreResult) {
                  return prev;
                }
                return Object.assign(prev, fetchMoreResult);
              }
            });
          }}
        >
          Load more
        </button>
      </div>
    );
  }}
</Query>;


// 66.   my-repositories.js
import React, { Component } from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

const reposQuery = gql`
  query Myrepositories($first: Int!) {
    viewer {
      repositories(first: $first) {
        edges {
          node {
            name
          }
        }
      }
    }
  }
`;

class Myrepositories extends Component {
  handleMore = (data, fetchMore, current) => {
    fetchMore({
      variables: { first: current + 10 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) {
          return prev;
        }
        return Object.assign(prev, fetchMoreResult);
      }
    });
  };

  render() {
    return (
      <Query query={reposQuery} variables={{ first: 10 }}>
        {({ data, loading, error, fetchMore }) => {
          if (loading) return <p>loading...</p>;
          if (error) return <p>{error.message}</p>;

          let current = data.viewer.repositories.edges.length;

          return (
            <div>
              <ul>
                <h2>First {current} repositories</h2>
                {data.viewer.repositories.edges.map(({ node }) => (
                  <li key={node.name}>{node.name}</li>
                ))}
              </ul>

              <button onClick={() => this.handleMore(data, fetchMore, current)}>
                Load more
              </button>
            </div>
          );
        }}
      </Query>
    );
  }
}

export default Myrepositories;





// 7.
// Рефакторинг коду
// ./queries.js
import { gql } from 'apollo-boost'

const reposQuery = gql`

query Myrepositories($first:Int!){
     viewer {
    repositories(first: $first) {
      edges {
        node {
          id
          name
          stargazers{
          totalCount
         }
          viewerHasStarred
        }
      }
    }
  }
}
`
const userQuery = gql` {
    viewer {
     name
     email
   }
}`

export { reposQuery, userQuery }


// ./display-repos.js
import React from 'react';

function Displayrepos(props) {

const { current, data, refetch } = props

return (
     <div>
        <h2>First {current} repositories</h2>
        {data.viewer.repositories
          .edges.map(({ node }) =>
             <ul className="list" key={node.id}>
                <li>{node.name}</li>
                <li>stars {node.stargazers.totalCount}</li>
            </ul>
         )}
        <button onClick={props.handleMore}>Load more</button>
    </div>
    )
}

export default Displayrepos;





//   ./my-repositories.js
import React, { Component } from "react";
import { Query } from "react-apollo";
import Displayrepos from "./display-repos";
import { reposQuery } from "./queries";

class Myrepositories extends Component {
  handleMore = (data, fetchMore, current) => {
    fetchMore({
      variables: { first: current + 10 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) {
          return prev;
        }
        return Object.assign(prev, fetchMoreResult);
      }
    });
  };

  render() {
    return (
      <Query query={reposQuery} variables={{ first: 10 }}>
        {({ data, loading, error, fetchMore, refetch }) => {
          if (loading) return <p>loading...</p>;
          if (error) return <p>{error.message}</p>;

          let current = data.viewer.repositories.edges.length;

          return (
            <Displayrepos
              current={current}
              refetch={refetch}
              data={data}
              handleMore={() => this.handleMore(data, fetchMore, current)}
            />
          );
        }}
      </Query>
    );
  }
}

export default Myrepositories;





// 8.  
// Для модифікації даних у graphql нам потрібно надсилати мутації замість запитів, оскільки запити використовуються для отримання даних із серверної бази.
// Мета мутацій - це додавання, видалення або оновлення даних, які наразі зберігаються у серверній системі.
// Мутації починаються з ключового слова mutation.

// Приклад додавання зірки до вашого сховища GitHub.
mutation AddStar($repoid:ID!){
   addStar(input:{starrableId:$repoid}){
    starrable{
      stargazers{
        totalCount
      }
      viewerHasStarred
    }
  }
}


// ./addstar.js
import React, { Component } from "react";
import { Mutation } from "react-apollo";
import { gql } from "apollo-boost";

const addStarquery = gql`
  mutation AddStar($repoid: ID!) {
    addStar(input: { starrableId: $repoid }) {
      starrable {
        stargazers {
          totalCount
        }
        viewerHasStarred
      }
    }
  }
`;

class AddStar extends Component {
  render() {
    return (
      <Mutation mutation={addStarquery}>
        {(addStar, { data, loading, error }) => {
          return (
            <div>
              <button
                onClick={() => {
                  addStar({ variables: { repoid: this.props.id } }).then(
                    res => {
                      this.props.refetch();
                    }
                  );
                }}
              >
                {" "}
                Addstar
              </button>

              {loading && <p>loading...</p>}
              {error && <p>{error.message}</p>}
            </div>
          );
        }}
      </Mutation>
    );
  }
}

export default AddStar;



// ./removestar.js
import React, { Component } from "react";
import { Mutation } from "react-apollo";
import { gql } from "apollo-boost";

const removeStarquery = gql`
  mutation RemoveStar($repoid: ID!) {
    removeStar(input: { starrableId: $repoid }) {
      starrable {
        stargazers {
          totalCount
        }
        viewerHasStarred
      }
    }
  }
`;

class RemoveStar extends Component {
  render() {
    return (
      <Mutation mutation={removeStarquery}>
        {(removeStar, { data, loading, error }) => {
          return (
            <div>
              <button
                onClick={() => {
                  removeStar({
                    variables: { repoid: this.props.id }
                  }).then(res => {
                    this.props.refetch();
                  });
                }}
              >
                {" "}
                remove star
              </button>
              {loading && <p>processing...</p>}
              {error && <p>{error.message}</p>}
            </div>
          );
        }}
      </Mutation>
    );
  }
}

export default RemoveStar;




// ./display-repos.js
import React from "react";
import AddStar from "./addstar";
import RemoveStar from "./removestar";

function Displayrepos(props) {
  const { current, data, refetch } = props;

  return (
    <div>
      <h2>First {current} repositories</h2>
      {data.viewer.repositories.edges.map(({ node }) => (
        <ul className="list" key={node.id}>
          <li>
            {node.name}

            {node.viewerHasStarred ? (
              <RemoveStar id={node.id} refetch={refetch} />
            ) : (
              <AddStar id={node.id} refetch={refetch} />
            )}
          </li>
          <li>stars {node.stargazers.totalCount}</li>
        </ul>
      ))}
      <button onClick={props.handleMore}>Load more</button>
    </div>
  );
}

export default Displayrepos;