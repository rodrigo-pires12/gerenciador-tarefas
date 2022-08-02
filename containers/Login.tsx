import React from "react";

const Login = () => {
  return (
    <div className="container-login">
      <img src="/assets/logo-fiap.svg" alt="Logo FIAP" className="logo" />
      <form action="">
        <div>
          <div className="input">
            <img src="/assets/mail.svg" alt="Informe seu login" />
            <input type="text" placeholder="Login" />
          </div>
          <div className="input">
            <img src="/assets/lock.svg" alt="Informe sua senha" />
            <input type="password" placeholder="Senha" />
            <img src="/assets/eye.svg" alt="Show password" />
          </div>
        </div>
        <button>Entrar</button>
      </form>
    </div>
  );
};

export default Login;
