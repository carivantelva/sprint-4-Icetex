


import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import './login.css';
import { Header } from '../components/header';
import { Footer } from '../components/footer';

function Logup() {
    const [formData, setFormData] = useState({
        nombre: '',
        apellidos: '',
        email: '',
        direccion: '',
        password: '',
        confirmPassword: '',
    });

    const [errors, setErrors] = useState({});

    const validateForm = (event) => {
        event.preventDefault();

        const newErrors = {};
        if (!formData.nombre) newErrors.nombre = 'El nombre es obligatorio';
        if (!formData.apellidos) newErrors.apellidos = 'Los apellidos son obligatorios';
        if (!formData.email) newErrors.email = 'El correo electrónico es obligatorio';
        if (!formData.direccion) newErrors.direccion = 'La dirección es obligatoria';
        if (!formData.password) newErrors.password = 'La contraseña es obligatoria';
        if (formData.password.length < 8) newErrors.password = 'La contraseña debe tener al menos 8 caracteres';
        if (formData.password !== formData.confirmPassword) {
            newErrors.password = 'Las contraseñas no coinciden';
            newErrors.confirmPassword = 'Las contraseñas no coinciden';
        }

        if (Object.keys(newErrors).length === 0) {
            // Los campos son válidos, puedes realizar la acción de registro
            console.log('Formulario válido, realiza la acción de registro aquí.');
        } else {
            setErrors(newErrors);
        }
    };

    const handleInputChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });

        setErrors({
            ...errors,
            [event.target.name]: undefined,
        });
    };

    return (
        <div className="container">
            <Header />
            <h2>Registro</h2>
            <form onSubmit={validateForm}>
                <div className="form-group">
                    <label htmlFor="nombre">Nombre:</label>
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        className={`form-control ${errors.nombre ? 'is-invalid' : ''}`}
                        value={formData.nombre}
                        onChange={handleInputChange}
                        required
                    />
                    {errors.nombre && <div className="invalid-feedback">{errors.nombre}</div>}
                </div>
                <div className="form-group">
                    <label htmlFor="apellidos">Apellidos:</label>
                    <input
                        type="text"
                        id="apellidos"
                        name="apellidos"
                        className={`form-control ${errors.apellidos ? 'is-invalid' : ''}`}
                        value={formData.apellidos}
                        onChange={handleInputChange}
                        required
                    />
                    {errors.apellidos && <div className="invalid-feedback">{errors.apellidos}</div>}
                </div>
                <div className="form-group">
                    <label htmlFor="email">Correo Electrónico:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>
                <div className="form-group">
                    <label htmlFor="direccion">Dirección:</label>
                    <input
                        type="text"
                        id="direccion"
                        name="direccion"
                        className={`form-control ${errors.direccion ? 'is-invalid' : ''}`}
                        value={formData.direccion}
                        onChange={handleInputChange}
                        required
                    />
                    {errors.direccion && <div className="invalid-feedback">{errors.direccion}</div>}
                </div>
                <div className="form-group">
                    <label htmlFor="password">Contraseña:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                    />
                    {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                </div>
                <div className="form-group">
                    <label htmlFor="confirm-password">Confirmar Contraseña:</label>
                    <input
                        type="password"
                        id="confirm-password"
                        name="confirmPassword"
                        className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        required
                    />
                    {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword}</div>}
                </div>
                <button type="submit" className="btn btn-primary">Registrarse</button>
            </form>
            <div className="navigation">
                <p>¿Ya tienes una cuenta? <Link to="/login">Iniciar Sesión</Link></p>
            </div>
            <br />
            <Footer />
        </div>
    );
}

export default Logup;
