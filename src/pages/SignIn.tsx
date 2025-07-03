import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DOCTOR_CREDENTIALS } from '../config/auth';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    // Hardcoded credentials from config file
    const DOCTOR_EMAIL = DOCTOR_CREDENTIALS.email;
    const DOCTOR_PASSWORD = DOCTOR_CREDENTIALS.password;

    const handleSignIn = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');
        await new Promise(resolve => setTimeout(resolve, 1000));
        if (email === DOCTOR_EMAIL && password === DOCTOR_PASSWORD) {
            localStorage.setItem('isAuthenticated', 'true');
            localStorage.setItem('userEmail', email);
            navigate('/dashboard');
        } else {
            setError('Invalid email or password. Only authorized doctors can sign in.');
        }
        setIsLoading(false);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-100 via-white to-orange-200">
            <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-2xl border border-orange-100 relative">
                <div className="flex flex-col items-center mb-6">
                    <img
                        className="h-16 w-auto mb-2 drop-shadow-md"
                        src="/logo.png"
                        alt="Logo"
                    />
                    <h2 className="text-3xl font-bold text-orange-900 mb-1">Doctor Sign In</h2>
                    <p className="text-gray-500 text-sm">Access your medical dashboard</p>
                </div>
                <form className="space-y-5" onSubmit={handleSignIn}>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-orange-900 mb-1">
                            Email address
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition placeholder-gray-400 bg-orange-50"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="relative">
                        <label htmlFor="password" className="block text-sm font-medium text-orange-900 mb-1">
                            Password
                        </label>
                        <input
                            id="password"
                            name="password"
                            type={showPassword ? 'text' : 'password'}
                            autoComplete="current-password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition placeholder-gray-400 bg-orange-50 pr-12"
                            placeholder="Enter your password"
                        />
                        <button
                            type="button"
                            tabIndex={-1}
                            className="absolute top-8 right-3 text-orange-400 hover:text-orange-600 focus:outline-none"
                            onClick={() => setShowPassword((prev) => !prev)}
                            aria-label={showPassword ? 'Hide password' : 'Show password'}
                        >
                            {showPassword ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-5.523 0-10-4.477-10-10 0-1.657.336-3.236.938-4.675M15 12a3 3 0 11-6 0 3 3 0 016 0zm6.062-4.675A9.956 9.956 0 0122 9c0 5.523-4.477 10-10 10-.657 0-1.299-.064-1.925-.187" /></svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0zm2.21-2.21a9.956 9.956 0 012.79 2.21c-1.73 2.61-4.5 5-8 5s-6.27-2.39-8-5a9.956 9.956 0 012.79-2.21" /></svg>
                            )}
                        </button>
                    </div>
                    {error && (
                        <div className="rounded-lg bg-red-100 border border-red-200 p-3 text-red-700 text-sm flex items-center gap-2">
                            <svg className="h-5 w-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-1.414 1.414M6.343 17.657l-1.414-1.414M5.636 5.636l1.414 1.414M17.657 17.657l1.414-1.414M12 8v4m0 4h.01" /></svg>
                            {error}
                        </div>
                    )}
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full py-2 px-4 rounded-lg bg-orange-600 hover:bg-orange-700 text-white font-semibold shadow-md transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                        {isLoading && (
                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                        )}
                        {isLoading ? 'Signing in...' : 'Sign in'}
                    </button>
                </form>
                <div className="flex items-center my-6">
                    <div className="flex-grow border-t border-orange-100" />
                    <span className="mx-3 text-gray-400 text-xs">OR</span>
                    <div className="flex-grow border-t border-orange-100" />
                </div>
                <div className="text-center text-xs text-gray-400">
                    For authorized medical personnel only
                </div>
            </div>
        </div>
    );
};

export default SignIn;
