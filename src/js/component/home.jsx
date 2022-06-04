import React, { useState } from "react";
import TodoCard from "./TodoCard";
import Navbar from "./Navbar";
import Footer from "./Footer";

//create your first component
const Home = () => {
	const boxSize = {
		maxWidth: "500px",
	};

	const [toDos, setToDos] = useState([
		{
			id: 1,
			text: "Buy more plants",
		},
		{
			id: 2,
			text: "Repot the Proteas",
		},
		{
			id: 3,
			text: "Buy perlite",
		},
		{
			id: 4,
			text: "Study more!",
		},
	]);

	const addToDo = (toDo) => {
		if (toDos.length) {
			toDo.id = toDos[toDos.length - 1].id + 1;
		} else {
			toDo.id = 1;
		}

		setToDos([...toDos, toDo]);
	};

	const deleteToDo = (id) => {
		console.log(id);
		setToDos(toDos.filter((toDo) => toDo.id != id));
		console.log(toDos);
	};

	return (
		<div>
			<Navbar />
			<div className="container" style={boxSize}>
				<TodoCard
					toDos={toDos}
					addToDo={addToDo}
					deleteToDo={deleteToDo}
				/>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
