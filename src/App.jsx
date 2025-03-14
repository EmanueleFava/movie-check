import './App.css';
import NavbarComponent from './components/navbar/NavbarComponent';
import FooterComponent from './components/footer/FooterComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './routes/AppRouter';


function App() {
  return (
    <>
      <Router>
        <NavbarComponent />
        <main>
          <AppRouter />
        </main>
        <FooterComponent/>
      </Router>
    </>
  );
}

export default App;
