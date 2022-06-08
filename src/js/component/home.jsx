import React, { useState, useEffect } from "react";
import TodoCard from "./TodoCard";
import Navbar from "./Navbar";
import Footer from "./Footer";

//create your first component
const Home = () => {
	const boxSize = {
		maxWidth: "500px",
	};

	const [toDos, setToDos] = useState([]);

	const userName = "julienga11";

	const postDataFromAPI = () => {
		fetch(`https://assets.breatheco.de/apis/fake/todos/user/${userName}`, {
			headers: { "Content-Type": "application/json" },
			method: "POST",
			body: JSON.stringify([]),
		})
			.then((response) => {
				console.log("Resolved!", response);
				return response.json();
			})
			.then((data) => {
				console.log(data);
				getDataFromAPI();
			})
			.catch((error) => {
				console.log("ERROR!!!", error);
			});
	};

	const getDataFromAPI = () => {
		fetch(`https://assets.breatheco.de/apis/fake/todos/user/${userName}`, {
			headers: { "Content-Type": "application/json" },
			method: "GET",
		})
			.then((response) => {
				console.log("Resolved!", response);
				if (response.status == 404) {
					console.log("entra");
					postDataFromAPI();
					getDataFromAPI();
				} else {
					return response.json();
				}
			})
			.then((data) => {
				console.log(data);
				setToDos(data);
			})
			.catch((error) => {
				console.log("ERROR!!!", error);
			});
	};
	useEffect(() => {
		// postDataFromAPI();
		getDataFromAPI();
	}, []);

	const putDataFromAPI = () => {
		console.log("Let's rjjrskld", toDos);
		fetch(`https://assets.breatheco.de/apis/fake/todos/user/${userName}`, {
			headers: { "Content-Type": "application/json" },
			method: "PUT",
			body: JSON.stringify(toDos),
		})
			.then((response) => {
				console.log("Resolved!", response);
				return response.json();
			})
			.then((data) => {
				console.log(data);
			})
			.catch((error) => {
				console.log("ERROR!!!", error);
			});
	};

	useEffect(() => {
		if (toDos?.length > 0) {
			putDataFromAPI();
		}
	}, [toDos]);

	// component mount
	// after a change on the depency array

	const addToDo = (toDo) => {
		// if (toDos.length) {
		// 	toDo.id = toDos[toDos.length - 1].id + 1;
		// } else {
		// 	toDo.id = 1;
		// }

		setToDos([...toDos, toDo]);
	};

	const deleteToDo = (id) => {
		console.log(id);
		setToDos(toDos.filter((toDo, i) => i != id));
		console.log(toDos);
	};

	const deleteAll = () => {
		console.log("deleteall!!!!");
		fetch(`https://assets.breatheco.de/apis/fake/todos/user/${userName}`, {
			headers: { "Content-Type": "application/json" },
			method: "DELETE",
		})
			.then((response) => {
				console.log("Resolved!", response);
				return response.json();
			})
			.then((data) => {
				console.log("DAATAAAA", data);
				postDataFromAPI();
				// setToDos(data);
			})
			.catch((error) => {
				console.log("ERROR!!!", error);
			});
		// setToDos([]);
	};

	const changeStatus = (id) => {
		console.log("haaaaa", id);
		setToDos(
			toDos.map((toDo, i) => {
				console.log("asdf", i, id);
				if (i == id) {
					toDo.done = !toDo.done;
				}
				return toDo;
			})
		);
	};

	return (
		<div>
			<Navbar />
			<div className="container" style={boxSize}>
				<TodoCard
					toDos={toDos}
					addToDo={addToDo}
					changeStatus={changeStatus}
					deleteToDo={deleteToDo}
					deleteAll={deleteAll}
				/>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
