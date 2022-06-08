import React, { useState } from "react";

const Do = ({ addToDo }) => {
	const todoInputStyle = {
		borderColor: "black",
		boxShadow: "none",
	};

	const [inputValue, setInputValue] = useState("");

	const handleChange = (e) => {
		setInputValue(e.target.value);
	};

	const sumbitHandler = (e) => {
		e.preventDefault();

		if (inputValue === "") {
			alert("Please enter what needs to be done");
			return false;
		}
		const newToDo = {
			// id: 0,
			label: inputValue,
			done: false,
		};
		addToDo(newToDo);
		setInputValue("");
	};

	return (
		<li className="list-group-item">
			<form onSubmit={sumbitHandler}>
				<div className="input-group">
					<input
						type="text"
						value={inputValue}
						onChange={handleChange}
						className="form-control"
						placeholder="What needs to be done?"
						style={todoInputStyle}
					/>
					<button
						className="btn btn-dark"
						type="submit"
						style={todoInputStyle}>
						Add
					</button>
				</div>
			</form>
		</li>
	);
};

export default Do;

// const insertInput = () => {
//
//     return <div>
//         <input type="text" onChange={e => setInputValue(e.target.value)} value={inputValue} />
//         <button onClick={validateInput}
//     </div>;
// }
