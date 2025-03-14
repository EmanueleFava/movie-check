import React, { useState } from 'react';
import { Form, Container, Alert } from 'react-bootstrap';
import './AuthForm.css';

function AuthForm ({ type }) {
    const [formData, setFormData] = useState({
        username: '', // Necessario solo per la registrazione
        email: '',
        password: '',
        confirmPassword: '', // Necessario solo per registrazione
    });

    const [error, setError] = useState(null);

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

        // Validazione base del form
        if (type === 'register' && formData.password !== formData.confirmPassword) {
        setError('Le password non corrispondono!');
        return;
        }

        if (!formData.email  || !formData.password  (type === 'register' && !formData.username)) {
        setError('Tutti i campi sono obbligatori!');
        return;
        }

        // Azioni per il login o la registrazione
        console.log("${type === 'register' ? 'Registrazione' : 'Login'} effettuato con successo!");
        setError(null); // Reset dell'errore se la validazione è passata
    };

    return (
        <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh', marginTop: '40px' }}>
        <div
            className="p-5"
            style={{
            backgroundColor: 'white',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            minHeight: '300px'
            }}
        >
            <h2 className="text-center" style={{fontWeight: 600, color: '#1E242F' ,marginBottom: '20px'}}>{type === 'register' ? 'Sign Up!' : 'Log In!'}</h2>

            {error && <Alert variant="danger">{error}</Alert>}

            <Form onSubmit={handleSubmit}>
            {/* Campo Username - Solo per la registrazione */}
            {type === 'register' && (
                <Form.Group controlId="formUsername" className="mb-3">
                <Form.Control
                    type="text"
                    placeholder="Inserisci nome"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                />
                </Form.Group>
            )}

            {/* Campo Email */}
            <Form.Group controlId="formEmail" className="mb-3">
                <Form.Control
                type="email"
                placeholder="Inserisci email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                />
            </Form.Group>

            {/* Campo Password */}
            <Form.Group controlId="formPassword" className="mb-3">
                <Form.Control
                type="password"
                placeholder="Inserisci password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                />
            </Form.Group>

            {/* Campo Confirm Password - Solo per la registrazione */}
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

            {/* Bottone che cambia a seconda del tipo di form */}
            <button className="btn-form" type="submit">
                {type === 'register' ? 'Register' : 'Log In'}
            </button>
            </Form>
        </div>
        </Container>
    );
};

export default AuthForm;