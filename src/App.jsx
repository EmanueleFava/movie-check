import './App.css';
import NavbarComponent from './components/navbar/NavbarComponent';
import FooterComponent from './components/footer/FooterComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './routes/AppRouter';
import { AuthProvider } from './components/context/AuthContext'; // Importa il provider del contesto

function App() {
    return (
        <AuthProvider> 
            <Router>
                <NavbarComponent />
                <main>
                    <AppRouter />
                </main>
                <FooterComponent />
            </Router>
        </AuthProvider>
    );
}

export default App;