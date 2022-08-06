import React, { useState } from "react";

const Filter = () => {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="container-filtros">
      <div className="title">
        <span>Tarefas</span>
        <img
          src="/assets/filtro.svg"
          alt="Filtrar Tarefas"
          onClick={(e) => setShowFilters(!showFilters)}
        />
        <div className="form">
          <div>
            <label htmlFor="">Data prevista de conclusão</label>
            <input type="date" />
          </div>
          <div>
            <label htmlFor="">até</label>
            <input type="date" />
          </div>
          <div className="line" />
          <div>
            <label htmlFor="">Status</label>
            <select name="" id="">
              <option value="">Todas</option>
              <option value="">Ativas</option>
              <option value="">Concluídas</option>
            </select>
          </div>
        </div>
      </div>
      {showFilters && (
        <div className="filtrosMobile">
          <div>
            <label htmlFor="">Data prevista de conclusão</label>
            <input type="date" />
          </div>
          <div>
            <label htmlFor="">até</label>
            <input type="date" />
          </div>
          <div className="line" />
          <div>
            <label htmlFor="">Status</label>
            <select name="" id="">
              <option value="">Todas</option>
              <option value="">Ativas</option>
              <option value="">Concluídas</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;
