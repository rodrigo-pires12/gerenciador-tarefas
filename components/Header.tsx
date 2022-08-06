import { NextPage } from "next";
import React from "react";

type HeaderProps = {
  logout(): void;
};

const Header: NextPage<HeaderProps> = ({ logout }) => {
  const fullName = localStorage.getItem("userName");
  const userName = fullName?.split(" ") || "...";

  return (
    <div className="container-header">
      <img src="/assets/logo-fiap.svg" alt="Logo FIAP" className="logo" />
      <button>
        <span>+</span>Adicionar Tarefa
      </button>
      <div className="mobile" onClick={logout}>
        <span>Olá, {userName}</span>
        <img src="/assets/exit-mobile.svg" alt="Sair" />
      </div>
      <div className="desktop" onClick={logout}>
        <span>Olá, {userName}</span>
        <img src="/assets/exit-desktop.svg" alt="Sair" />
      </div>
    </div>
  );
};

export default Header;
