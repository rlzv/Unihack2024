import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../api/userApi';

interface RegisterUserProps {
    onRegisterSuccess: () => void;
}

const RegisterUser: React.FC<RegisterUserProps> = ({ onRegisterSuccess }) => {
    const [form, setForm] = useState({ username: '', email: '', password: '' });
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await createUser(form);
            onRegisterSuccess();
            navigate('/create-tour'); // Redirect to create-tour after successful registration
        } catch (err) {
            setError('Registration failed. Please try again.');
        }
    };

    return (
        <div>
            <h2>Register</h2>
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={form.username}
                    onChange={handleChange}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={form.password}
                    onChange={handleChange}
                />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default RegisterUser;
