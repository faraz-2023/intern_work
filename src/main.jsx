import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Eye, EyeOff } from 'lucide-react';
import './styles.css';

function LogoPlaceholder() {
  return <div className="logo-wrap" aria-label="Logo space" />;
}

function PasswordField({ placeholder = 'Password' }) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="password-field">
      <input type={visible ? 'text' : 'password'} placeholder={placeholder} />
      <button
        type="button"
        className="icon-button"
        aria-label={visible ? 'Hide password' : 'Show password'}
        onClick={() => setVisible((value) => !value)}
      >
        {visible ? <EyeOff size={20} /> : <Eye size={20} />}
      </button>
    </div>
  );
}

function LoginForm({ onSwitch }) {
  return (
    <form className="auth-form">
      <LogoPlaceholder />
      <h1>Please Sign In</h1>
      <input type="email" placeholder="Email Address" />
      <PasswordField />
      <a href="#" className="support-link">
        Forgot Password
      </a>
      <label className="check-row">
        <input type="checkbox" />
        <span>Remember Me</span>
      </label>
      <div className="button-row">
        <button type="submit" className="primary-button">
          Login
        </button>
        <button type="button" className="text-button" onClick={onSwitch}>
          Create Account
        </button>
      </div>
    </form>
  );
}

function SignupForm({ onSwitch }) {
  return (
    <form className="auth-form">
      <LogoPlaceholder />
      <h1>Create Account</h1>
      <input type="text" placeholder="Full Name" />
      <input type="email" placeholder="Email Address" />
      <PasswordField />
      <PasswordField placeholder="Confirm Password" />
      <label className="check-row">
        <input type="checkbox" />
        <span>I agree to the terms</span>
      </label>
      <div className="button-row">
        <button type="submit" className="primary-button">
          Sign Up
        </button>
        <button type="button" className="text-button" onClick={onSwitch}>
          Back to Login
        </button>
      </div>
    </form>
  );
}

function App() {
  const [mode, setMode] = useState('login');

  return (
    <main className="page-shell">
      <section
        className={`auth-card auth-card--${mode}`}
        aria-label={mode === 'login' ? 'Login form' : 'Sign up form'}
      >
        {mode === 'login' ? (
          <LoginForm onSwitch={() => setMode('signup')} />
        ) : (
          <SignupForm onSwitch={() => setMode('login')} />
        )}
      </section>
      <div className="bottom-band" aria-hidden="true" />
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
