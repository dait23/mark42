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
//import AppStore from './stores/app.store';


// Pages
import { Login, Splash, Home} from './views/Pages';

// import { renderRoutes } from 'react-router-config';

//



class App extends Component {
  render() {
    return (

        <Router>
         <Switch>
          <Route exact path="/login" name="Login Page" component={Login} />
          <Route exact path="/home" name="Home Page" component={Home} />
          <Route path="/" name="Home" component={Home} />
         </Switch>
        </Router>
    );
  }
}

export default App;
