import React from "react";
import Header from "./Header";
import Do from "./Do";
import "./TodoCard.css";

const TodoCard = ({ toDos, addToDo, deleteToDo, deleteAll, changeStatus }) => {
	return (
		<div className="card">
			<Header />
			<ul className="list-group list-group-flush">
				<Do addToDo={addToDo} />
				{toDos.map((toDo, i) => (
					<li
						className={
							toDo.done === true
								? "list-group-item d-flex flex-row justify-content-between taskDone"
								: "list-group-item d-flex flex-row justify-content-between"
						}
						onDoubleClick={() => changeStatus(i)}
						key={i}>
						{toDo.label}
						<div
							// todoid={toDo.id}
							className="btnHidden"
							onClick={() => deleteToDo(i)}>
							<i className="bi bi-trash"></i>
						</div>
					</li>
				))}
				<li className="list-group-item text-end fst-italic small py-1">
					{toDos.length === 0
						? "No tasks, add a task!!!"
						: toDos.length + " items left"}

					<button
						className="d-flex btn btnUnset btn-danger"
						onClick={deleteAll}>
						Delete All
					</button>
				</li>
			</ul>
		</div>
	);
};

export default TodoCard;
