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
		const idRandom = Math.floor(Math.random() * 100) + 1;
		toDo.id = idRandom;
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
