
import './App.css'
import { CheckAuth } from './components/CheckAuth';
import { LoginForm } from './components/LoginForm';
import { AuthProvider } from './providers/AuthProvider';

export function App() {
  return (
    <div>
      <AuthProvider>
        <h1>Your App</h1>
        <LoginForm />
        <CheckAuth />
      </AuthProvider>
    </div>
  )
}
