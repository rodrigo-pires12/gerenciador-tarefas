import { NextPage } from "next";
import React from "react";

type footerProps = {
  setShowModal(e: boolean): void;
};

const Footer: NextPage<footerProps> = ({ setShowModal }) => {
  return (
    <div className="container-footer">
      <button onClick={() => setShowModal(true)}>
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
