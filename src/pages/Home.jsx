import React, { useContext, useEffect, useState } from "react";
import { Section } from "../Styles/Section";
import { Title } from "../Styles/Title";
import { Input } from "../Styles/Input";
import { Container } from "../Styles/Container";
import { GrAddCircle } from "react-icons/gr";
import { ListTasks } from "../Styles/ListTasks";
import { ContextProvider } from "../context/Context";
import TaskComp from "../Components/TaskComp";
import { BiSad } from "react-icons/bi";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Paragraph } from "../Styles/Paragraph";
import ModalComp from "../Components/ModalComp";
import { motion } from "framer-motion";

const Home = () => {
	const { boxShadowStyle, isMobile } = useContext(ContextProvider);
	const [idTask, setIdTask] = useState(1);
	const [textTask, setTextTask] = useState("");
	const [list, setList] = useState([]);
	const [editing, setEditing] = useState(false);
	const [editingTask, setEditingTask] = useState(null);

	let taskObj = {};

	const createTask = () => {
		if (textTask === "") {
			toast.error("Escreva uma tarefa primeiro !", {
				position: "top-center",
				autoClose: 1000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
			});
		} else {
			taskObj = {
				id: idTask,
				task: textTask,
			};
			setList([...list, taskObj]);
			setIdTask(idTask + 1);
			setTextTask("");
		}
	};

	const handleTaskInput = (e) => {
		setTextTask(e.target.value);
	};

	const handleDeleteTask = (id) => {
		const updatedList = list.filter((task) => task.id !== id);
		setList(updatedList);
	};

	const handleModal = (id) => {
		const task = list.find((t) => t.id === id);
		setEditing(!editing);
		setEditingTask(task);
	};

	const handleUpdateTask = (e) => {
		e.preventDefault();
		if (editingTask.task === "" || null) {
			return toast.error("Escreva algo !", {
				position: "top-center",
				autoClose: 1000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
			});
		}
		const updatedList = list.map((task) =>
			task.id === editingTask.id ? editingTask : task
		);
		setList(updatedList);
		setEditing(false);
	};

	return (
		<Section
			className="home"
			display="flex"
			align="center"
			justify="center"
		>
			<Container
				dir="column"
				justify="space-between"
				gap="3rem"
				align="center"
				width={isMobile ? "90vw" : "75vw"}
			>
				{editing && (
					<ModalComp
						todo={list}
						editing={editing}
						setEditing={setEditing}
						handleModal={handleModal}
						editingTask={editingTask}
						setEditingTask={setEditingTask}
						handleUpdateTask={handleUpdateTask}
					/>
				)}
				<ToastContainer />
				<Title>Escreva alguma tarefa !</Title>
				<Container width="100%" className="inputs">
					<motion.div
						style={{ width: "100%" }}
						initial={{ scaleX: 0, originX: 0 }}
						animate={{ scaleX: 1, originX: 0 }}
						transition={{
							type: "spring",
							stiffness: 260,
							damping: 20,
						}}
					>
						<Input
							onChange={handleTaskInput}
							style={boxShadowStyle}
							type="text"
							value={textTask}
							autoFocus
						/>
						<GrAddCircle
							onClick={createTask}
							className="add-icon"
						/>
					</motion.div>
				</Container>
				<motion.div
					initial={{ scaleY: 0, opacity: 0, originY: 0 }}
					animate={{ scaleY: 1, opacity: 1, originY: 0 }}
					transition={{
						type: "spring",
						stiffness: 260,
						damping: 20,
						delay: 0.5,
					}}
					style={{ width: "100%" }}
				>
					<ListTasks style={boxShadowStyle}>
						<Container
							textAlign="center"
							dir="column"
							gap="2rem"
						>
							{list.length ? (
								list.map((todo) => {
									return (
										<motion.div
											key={todo.id}
											initial={{
												x: -100,
												opacity: 0,
												originY: 0,
											}}
											animate={{
												x: 0,
												opacity: 1,
												originY: 0,
											}}
											transition={{
												type: "spring",
												stiffness: 260,
												damping: 20,
											}}
											exit={{
												opacity: 0,
												x: -100,
											}}
											style={{ width: "100%" }}
										>
											<TaskComp
												todo={todo}
												onDelete={
													handleDeleteTask
												}
												editing={editing}
												setEditing={
													setEditing
												}
												handleModal={
													handleModal
												}
											/>
										</motion.div>
									);
								})
							) : (
								<>
									<Paragraph>
										Não há tarefas adicionadas
									</Paragraph>
									<BiSad />
								</>
							)}
						</Container>
					</ListTasks>
				</motion.div>
			</Container>
		</Section>
	);
};

export default Home;
