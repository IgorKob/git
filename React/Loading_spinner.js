// https://reactgo.com/react-display-loading-screen/
// Як відобразити завантажувальний спінер, коли dom відображається в React

// 1.   ./index.html
<div class="loader-container">
   <div class="loader"></div>
</div>

// Додайте стилі css spinner всередину <head> елемента.
<style>
.loader {
  border: 16px solid #f3f3f3;
  border-top: 16px solid #3498db;
  border-radius: 50%;
  width: 130px;
  height: 130px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0%  { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>




// 2.   ./App.js
import React, {useState,useEffect} from 'react';

export default function App() {
  const [isLoading, setLoading] = useState(true);

  function fakeRequest() {
    return new Promise(resolve => setTimeout(() => resolve(), 2500));
  }

  useEffect(() => {
    fakeRequest().then(() => {
      const el = document.querySelector(".loader-container");
      if (el) {
        el.remove();
        setLoading(!isLoading);
      }
    });
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <div className="App">
      <h1>Hello React</h1>
      <p>
         Lorem Ipsum is simply dummy text of the printing and typesetting
         industry.
      </p>
      <img src="https://avatars2.githubusercontent.com/u/39895671?s=400"
       alt="react-icon"/>
    </div>
  );
}




// 22.   ./App.js
import React from 'react';

class App extends React.Component {
  state = {
    loading: true
  };

  componentDidMount() {
    this.fakeRequest().then(() => {
      const el = document.querySelector(".loader-container");
      if (el) {
        el.remove();  // removing the spinner element
        this.setState({ loading: false }); // showing the app
      }
    });
  }

  fakeRequest = () => {
    return new Promise(resolve => setTimeout(() => resolve(), 2500));
  };

  render() {
    if (this.state.loading) {
      return null; //app is not ready (fake request is in process)
    }

    return (
      <div className="App">
        <h1>Hello React</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <img src="https://avatars2.githubusercontent.com/u/39895671?s=400"
        alt="react-icon"/>
      </div>
    );
  }
}

export default App;