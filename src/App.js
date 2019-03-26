import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
        <body>

        <div className="App">
          <div>
            <h1 className="vertical-container"> Welcome to my First PWA App !</h1>
          </div>
        </div>

        <script src="https://www.gstatic.com/firebasejs/5.9.1/firebase.js"></script>
        <script>
          var config = {
          apiKey: "AIzaSyA8kqxYodt9V2ZJfJsppoZgLV_mpLOH1gM",
          authDomain: "myhelloworld-535b9.firebaseapp.com",
          databaseURL: "https://myhelloworld-535b9.firebaseio.com",
          projectId: "myhelloworld-535b9",
          storageBucket: "myhelloworld-535b9.appspot.com",
          messagingSenderId: "392606947120"
        };
          firebase.initializeApp(config);
        </script>
        </body>

    );
  }
}

export default App;
