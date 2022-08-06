import React from "react";

const Footer = () => {
  return (
    <div className="container-footer">
      <button>
        <img src="/assets/add.svg" />
        Adicionar Tarefa
      </button>
      <span>
        © Copyright {new Date().getFullYear()}. Todos os direitos reservados.
      </span>
    </div>
  );
};

export default Footer;
