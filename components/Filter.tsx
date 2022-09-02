import { NextPage } from "next";
import React, { useState } from "react";

type filterProps = {
  periodoDe: string;
  setPeriodoDe(s: string): void;
  periodoAte: string;
  setPeriodoAte(s: string): void;
  status: string;
  setStatus(s: string): void;
};

const Filter: NextPage<filterProps> = ({
  periodoDe,
  periodoAte,
  status,
  setPeriodoDe,
  setPeriodoAte,
  setStatus,
}) => {
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
            <input
              type="date"
              value={periodoDe}
              onChange={(e) => setPeriodoDe(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="">até</label>
            <input
              type="date"
              value={periodoAte}
              onChange={(e) => setPeriodoAte(e.target.value)}
            />
          </div>
          <div className="line" />
          <div>
            <label htmlFor="">Status</label>
            <select
              name=""
              id=""
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value={0}>Todas</option>
              <option value={1}>Ativas</option>
              <option value={2}>Concluídas</option>
            </select>
          </div>
        </div>
      </div>
      {showFilters && (
        <div className="filtrosMobile">
          <div>
            <label htmlFor="">Data prevista de conclusão</label>
            <input
              type="date"
              value={periodoDe}
              onChange={(e) => setPeriodoDe(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="">até</label>
            <input
              type="date"
              value={periodoAte}
              onChange={(e) => setPeriodoAte(e.target.value)}
            />
          </div>
          <div className="line" />
          <div>
            <label htmlFor="">Status</label>
            <select
              name=""
              id=""
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value={0}>Todas</option>
              <option value={1}>Ativas</option>
              <option value={2}>Concluídas</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;
