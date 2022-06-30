import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import UseRoutes from './routes';
import { useAuth } from './hooks/auth.hook';
import { AuthContext } from './contex/auth-contex';
import Navbar from './components/navbar';
import Loader from './components/loader';
import 'materialize-css';

function App() {
  const { token, userId, logout, login, ready } = useAuth();
  const isAuthenticated = !!token;
  const routes = UseRoutes(isAuthenticated);
  if (!ready) {
    return <Loader />;
  }
  return (
    <AuthContext.Provider value={{
      token, logout, userId, login, isAuthenticated,
    }}>
      <Router>
        {isAuthenticated && <Navbar />}
        <div className="container">
          {routes}
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
