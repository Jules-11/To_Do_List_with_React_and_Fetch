import React from "react";
import Header from "./Header";
import Do from "./Do";
import "./TodoCard.css";

const TodoCard = ({ toDos, addToDo, deleteToDo }) => {
	return (
		<div className="card">
			<Header />
			<ul className="list-group list-group-flush">
				<Do addToDo={addToDo} />
				{toDos.map((toDo, i) => (
					<li
						className="list-group-item d-flex flex-row justify-content-between"
						key={toDo.id}>
						{toDo.text}
						<div
							todoid={toDo.id}
							className="btnHidden"
							onClick={() => deleteToDo(toDo.id)}>
							<i className="bi bi-trash"></i>
						</div>
					</li>
				))}
				<li className="list-group-item text-end fst-italic small py-1">
					{toDos.length === 0
						? "No tasks, add a task!!!"
						: toDos.length + " items left"}
				</li>
			</ul>
		</div>
	);
};

export default TodoCard;
