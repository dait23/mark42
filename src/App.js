import React, { Component } from 'react';
import { BrowserRouter as Router , HashRouter, Route, Switch } from 'react-router-dom';
import { useStrict } from 'mobx';
import { Provider } from 'mobx-react';
import './App.css';
// Styles
// CoreUI Icons Set
import '@coreui/icons/css/coreui-icons.min.css';
// Import Flag Icons Set
import 'flag-icon-css/css/flag-icon.min.css';
// Import Font Awesome Icons Set
import 'font-awesome/css/font-awesome.min.css';
// Import Simple Line Icons Set
import 'simple-line-icons/css/simple-line-icons.css';
// Import Main styles for this application
import './scss/style.css'

/////Store
import AppStore from './stores/app.store';


// Pages
import { Splash} from './views/Pages';

// import { renderRoutes } from 'react-router-config';

const stores = {
  AppStore
};



class App extends Component {
  render() {
    return (

        <Router>
         <Provider {...stores}>
          <Route path="/" name="Home" component={Splash} />
        </Provider>
        </Router>
    );
  }
}

export default App;
