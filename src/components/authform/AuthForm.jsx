import React, { useState } from 'react';
import { Form, Container, Alert } from 'react-bootstrap';
import { useMutation, useLazyQuery } from '@apollo/client';
import { CREATE_UTENTE } from '../../graphql/Mutation'; // Importa la mutation
import { UTENTE_LOGIN } from '../../graphql/Queries'; // Importa la query per il login
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Importa il contesto di autenticazione
import './AuthForm.css';

function AuthForm({ type }) {
    const [formData, setFormData] = useState({
        nome: '',
        cognome: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const navigate = useNavigate();
    const { login } = useAuth(); // Usa la funzione login dal contesto

    // Mutation per la registrazione
    const [createUtente, { loading: registrationLoading }] = useMutation(CREATE_UTENTE, {
        onCompleted: (data) => {
            setSuccess('Registrazione completata con successo!');
            setError(null);
            console.log('Utente creato:', data.createUtente);

            // Reindirizza alla pagina di login dopo 2 secondi
            setTimeout(() => {
                navigate('/login');
            }, 2000);
        },
        onError: (error) => {
            setError(error.message);
            setSuccess(null);
        },
    });

    // Query per il login
    const [utenteLogin, { loading: loginLoading }] = useLazyQuery(UTENTE_LOGIN, {
        onCompleted: (data) => {
            setSuccess('Login effettuato con successo!');
            setError(null);
            console.log('Utente loggato:', data.utenteLogin);

            // Salva i dati dell'utente nel contesto e nel localStorage
            login(data.utenteLogin); // Usa la funzione login del contesto

            // Reindirizza alla home o a una pagina protetta
            navigate('/');
        },
        onError: (error) => {
            setError(error.message);
            setSuccess(null);
        },
    });

    // Gestore per il cambiamento dei campi del form
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Gestore per la submission del form
    const handleSubmit = (e) => {
        e.preventDefault();

        if (type === 'register') {
            // Validazione per la registrazione
            if (formData.password !== formData.confirmPassword) {
                setError('Le password non corrispondono!');
                return;
            }

            if (!formData.email || !formData.password || !formData.nome || !formData.cognome) {
                setError('Tutti i campi sono obbligatori!');
                return;
            }

            const input = {
                email: formData.email,
                password: formData.password,
                nome: formData.nome,
                cognome: formData.cognome,
                ruolo: 'utente',
            };

            createUtente({ variables: { input } });
        } else {
            // Validazione per il login
            if (!formData.email || !formData.password) {
                setError('Tutti i campi sono obbligatori!');
                return;
            }

            // Esegui la query per il login
            utenteLogin({ variables: { email: formData.email, password: formData.password } });
        }

        setError(null);
    };

    return (
        <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh', marginTop: '40px' }}>
            <div
                className="p-5"
                style={{
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                    minHeight: '300px',
                }}
            >
                <h2 className="text-center" style={{ fontWeight: 600, color: '#1E242F', marginBottom: '20px' }}>
                    {type === 'register' ? 'Sign Up!' : 'Log In!'}
                </h2>

                {error && <Alert variant="danger">{error}</Alert>}
                {success && <Alert variant="success">{success}</Alert>}

                <Form onSubmit={handleSubmit}>
                    {type === 'register' && (
                        <Form.Group controlId="formNome" className="mb-3">
                            <Form.Control
                                type="text"
                                placeholder="Inserisci nome"
                                name="nome"
                                value={formData.nome}
                                onChange={handleChange}
                            />
                        </Form.Group>
                    )}

                    {type === 'register' && (
                        <Form.Group controlId="formCognome" className="mb-3">
                            <Form.Control
                                type="text"
                                placeholder="Inserisci cognome"
                                name="cognome"
                                value={formData.cognome}
                                onChange={handleChange}
                            />
                        </Form.Group>
                    )}

                    <Form.Group controlId="formEmail" className="mb-3">
                        <Form.Control
                            type="email"
                            placeholder="Inserisci email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group controlId="formPassword" className="mb-3">
                        <Form.Control
                            type="password"
                            placeholder="Inserisci password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    {type === 'register' && (
                        <Form.Group controlId="formConfirmPassword" className="mb-3">
                            <Form.Control
                                type="password"
                                placeholder="Conferma password"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                            />
                        </Form.Group>
                    )}

                    <button className="btn-form" type="submit" disabled={registrationLoading || loginLoading}>
                        {registrationLoading || loginLoading ? 'Caricamento...' : type === 'register' ? 'Register' : 'Log In'}
                    </button>
                </Form>
            </div>
        </Container>
    );
}

export default AuthForm;