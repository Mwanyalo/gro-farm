import './App.scss';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import ContactUs from './pages/ContactUs/ContactUs';

function App() {
  return (
    <div>
      <Header />
      <main id='content'>
        <Home />
        <AboutUs />
        <ContactUs />
      </main>
    </div>
  );
}

export default App;
