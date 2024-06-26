import { useState } from "react";
import classes from "./TodoItem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import {
	faStar as farStar,
	faTrashAlt as farTrashAlt,
} from "@fortawesome/free-regular-svg-icons";
import axios from "axios";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";

function TodoItem({
	content,
	_id,
	description,
	important,
	task_done,
	setTodo,
	todoDescription,
	settodoDescription,
}) {
	const [starChecked, setStarChecked] = useState(important);
	const [taskDone, setTaskDone] = useState(task_done);

	const setMarkAsImportantHandler = async (ev) => {
		const todoElement = ev.currentTarget.parentElement.parentElement;
		const taskId = todoElement.getAttribute("data-id");
		try {
			const response = await axios({
				method: "PATCH",
				url: `/api/todo/${taskId}`,
				data: { important: !starChecked },
			});
			setStarChecked((prev) => !prev);
			console.log("Task Marked as important: ", taskId);
			console.log(response);
		} catch (err) {
			console.error(err.message);
		}
	};

	const setTaskDoneHandler = async (ev) => {
		const todoElement = ev.currentTarget.parentElement;
		const taskId = todoElement.getAttribute("data-id");
		try {
			const response = await axios({
				method: "PATCH",
				url: `/api/todo/${taskId}`,
				data: { task_done: !taskDone },
			});
			console.warn("Marked as done: ", taskId);
			setTaskDone((prev) => !prev);
			console.log(response);
		} catch (err) {
			console.error(err.message);
		}
	};

	const deleteTodoHandler = async (ev) => {
		const todoElement = ev.currentTarget.parentElement.parentElement;
		const taskId = todoElement.getAttribute("data-id");
		try {
			const response = await axios({
				method: "DELETE",
				url: `/api/todo/${taskId}`,
			});
			todoElement.remove();
			console.log("Task deleted: ", taskId);
		} catch (err) {
			console.error(err.message);
		}
	};

	return (
		<article
			className={classes.todoItem}
			data-id={_id}
			style={{
				display: "flex",
				alignItems: "center",
			}}>
			<div
				style={{ marginRight: "1rem" }}
				className={`${classes.circle} ${taskDone ? classes.taskDone : ""}`}
				onClick={setTaskDoneHandler}>
				<span className={classes.checkmark}></span>
			</div>
			<div style={{ display: "flex", flexDirection: "column", width: "80%" }}>
				<h1 className={classes.todoContent} style={{ left: "-1rem" }}>
					{content}
				</h1>
				<hr />
				<h3
					className={classes.todoContent}
					style={{ fontSize: "0.8rem", left: "-0.8rem" }}>
					{description}
				</h3>
			</div>

			<div className={classes.starIconDiv}>
				<FontAwesomeIcon
					icon={faPencilAlt}
					onClick={(ev) => {
						setTodo(content);
						settodoDescription(description);
						deleteTodoHandler(ev);
					}}
				/>{" "}
				<FontAwesomeIcon
					icon={starChecked ? faStar : farStar}
					onClick={setMarkAsImportantHandler}
				/>
				<FontAwesomeIcon
					icon={farTrashAlt}
					className={classes.trashIcon}
					onClick={deleteTodoHandler}
				/>
			</div>

			{/* <div className={classes.starIconDiv}> */}
			{/* </div> */}
		</article>
	);
}

export default TodoItem;
