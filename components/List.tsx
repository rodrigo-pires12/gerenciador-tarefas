import moment from "moment";
import { NextPage } from "next";
import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { executeRequest } from "../services/ApiServices";
import { Task } from "../types/Task";
import { Item } from "./Item";

type ListProps = {
  tasks: Task[];
  getFilteredList(): void;
};

export const List: NextPage<ListProps> = ({ tasks, getFilteredList }) => {
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState("");
  const [_id, setId] = useState("");
  const [name, setName] = useState("");
  const [modalPrevisionDateStart, setModalPrevisionDateStart] = useState("");
  const [modalPrevisionDateEnd, setModalPrevisionDateEnd] = useState<
    string | undefined
  >("");

  const selectToEdit = (task: Task) => {
    setId(task._id);
    setName(task.name);
    setModalPrevisionDateStart(moment(task.previsionDate).format("DD/MM/yyyy"));
    setModalPrevisionDateEnd(task.finishDate);
    setShowModal(true);
  };

  const save = async () => {
    try {
      if (
        !name ||
        !name.trim() ||
        !modalPrevisionDateStart ||
        !modalPrevisionDateStart.trim() ||
        !_id ||
        !_id.trim()
      ) {
        setError("Favor preencher o formulário");
        return;
      }

      const body = {
        name,
        previsionDate: modalPrevisionDateStart,
        finishDate: modalPrevisionDateEnd,
      };

      await executeRequest("task?id=" + _id, "PUT", body);
      await getFilteredList();
      closeModal();
    } catch (e: any) {
      if (e?.response?.data?.error) {
        setError(e?.response?.data?.error);
      } else {
        setError("Ocorreu um erro ao tentar cadastrar a tarefa");
      }
    }
  };

  const closeModal = () => {
    setName("");
    setModalPrevisionDateStart("");
    setShowModal(false);
  };

  return (
    <>
      <div
        className={
          "container-listagem" + (tasks && tasks.length > 0 ? "" : " vazia")
        }
      >
        {tasks && tasks.length > 0 ? (
          tasks.map((t) => (
            <Item key={t._id} task={t} selectTaskToEdit={selectToEdit} />
          ))
        ) : (
          <>
            <img
              src="assets/not-found.svg"
              alt="Nenhuma atividade encontrada"
            />
            <p>Você ainda não possui tarefas cadastradas!</p>
          </>
        )}
      </div>
      <Modal show={showModal} onHide={closeModal} className="container-modal">
        <Modal.Body>
          <p>Atualizar tarefa</p>
          {error && <p className="error">{error}</p>}
          <input
            type="text"
            placeholder="Nome da Tarefa"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Data de Previsão"
            onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) =>
              modalPrevisionDateStart
                ? (e.target.type = "date")
                : (e.target.type = "text")
            }
            value={modalPrevisionDateStart}
            onChange={(e) => setModalPrevisionDateStart(e.target.value)}
          />
          <input
            type="text"
            placeholder="Data de Conclusão"
            onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) =>
              modalPrevisionDateEnd
                ? (e.target.type = "date")
                : (e.target.type = "text")
            }
            value={modalPrevisionDateEnd}
            onChange={(e) => setModalPrevisionDateEnd(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <div className="button col-12">
            <button onClick={save}>Atualizar</button>
            <span onClick={closeModal}>Cancelar</span>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};
