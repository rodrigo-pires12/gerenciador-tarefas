import React, { useState, FormEvent } from "react";

import { executeRequest } from "../services/ApiServices";

const Login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    try {
      if (!login || !password) {
        return setError("Favor informar usuário e senha.");
      }

      const body = { login, password };

      const result = await executeRequest("login", "POST", body);

      if (!result || !result.data) {
        console.log("Ocorreu um erro ao processar login. Tente novamente.");
      }

      const { name, email, token } = result.data;
      localStorage.setItem("accessToken", token);
      localStorage.setItem("userName", name);
      localStorage.setItem("userMail", email);
    } catch (error: any) {
      if (error?.response?.data?.error) {
        return setError(error?.response?.data?.error);
      }
      console.log("Ocorreu um erro ao processar login. Tente novamente.");
    }
  };

  return (
    <div className="container-login">
      <img src="/assets/logo-fiap.svg" alt="Logo FIAP" className="logo" />
      <form onSubmit={onSubmit}>
        {error && <p className="error">{error}</p>}
        <div>
          <div className="input">
            <img src="/assets/mail.svg" alt="Informe seu login" />
            <input
              type="text"
              placeholder="Login"
              value={login}
              onChange={(event) => setLogin(event.target.value)}
            />
          </div>
          <div className="input">
            <img src="/assets/lock.svg" alt="Informe sua senha" />
            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            {/* <img src="/assets/eye.svg" alt="Show password" /> */}
          </div>
        </div>
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
