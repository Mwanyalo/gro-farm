import './App.scss';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Auth from './pages/Auth/Auth';

function App() {
  return (
    <div>
      <Header />
      <main id='content'>
        <BrowserRouter>
          <Switch>
            <Route exact path='/login' component={Auth} />
            <Route exact path='/home' component={Home} />
            <Redirect to='/home' />
          </Switch>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
