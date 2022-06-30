import React, { useContext, useEffect, useState } from 'react';
import { useHttp } from '../hooks/http.hook';
import { useMessage } from '../hooks/message.hook';
import { AuthContext } from '../contex/auth-contex';

function AuthPage(props) {
  const auth = useContext(AuthContext);
  const { loading, error, request, clearError } = useHttp();
  const [form, setForm] = useState({
    email: '', password: '',
  });
  const message = useMessage();

  useEffect(() => {
    return () => {
      message(error);
      clearError();
    };
  }, [error, message, clearError]);

  const changeHandler = (evt) => {
    setForm({ ...form, [evt.target.name]: evt.target.value });
  };

  const registerHandler = async () => {
    try {
      const data = await request('/api/auth/register', 'POST', { ...form });
      message(data.message);
    } catch (e) {
    }
  };

  const loginHandler = async () => {
    try {
      const data = await request('/api/auth/login', 'POST', { ...form });
      auth.login(data.token, data.userId);
    } catch (e) {
    }
  };

  return (
    <div className="row">
      <div className="col s6 offset-s3">
        <h1>App</h1>
        <div className="card blue darken-1">
          <div className="card-content white-text">
            <span className="card-title">Authorization</span>

            <div>
              <div className="input-field ">
                <input
                  id="email"
                  type="email"
                  className="yellow-input"
                  name="email"
                  value={form.email}
                  onChange={changeHandler}
                />
                <label htmlFor="email">Email</label>
              </div>
              <div className="input-field">
                <input
                  id="password"
                  type="password"
                  className="yellow-input"
                  name="password"
                  value={form.password}
                  onChange={changeHandler}
                />
                <label htmlFor="password">Password</label>
              </div>
            </div>

          </div>
          <div className="card-action">
            <button
              className="btn yellow darken-4"
              style={{ marginRight: 10 }}
              onClick={loginHandler}
              disabled={loading}
            >
              Login
            </button>
            <button
              className="btn grey lighten-1 black-text"
              onClick={registerHandler}
              disabled={loading}
            >
              Registration
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
