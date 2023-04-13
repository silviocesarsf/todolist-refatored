import React, { useContext } from "react";
import { Modal } from "../Styles/Modal";
import { ModalBg } from "../Styles/ModalBg";
import { Section } from "../Styles/Section";
import { ContextProvider } from "../context/Context";
import { Input } from "../Styles/Input";
import { Title } from "../Styles/Title";
import { Container } from "../Styles/Container";
import { Button } from "../Styles/Button";
import { motion } from "framer-motion";

const ModalComp = ({
	editingTask,
	setEditingTask,
	handleModal,
	todo,
	handleUpdateTask,
}) => {
	const { boxShadowStyle } = useContext(ContextProvider);

	return (
		<>
			<ModalBg
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{
					type: "spring",
					stiffness: 260,
					damping: 20,
				}}
			>
				<Modal style={boxShadowStyle}>
					<Container
						className="modal"
						dir="column"
						align="center"
						justify="space-around"
						width="100%"
						height="100%"
						gap="1rem"
					>
						<Title color="#000000ab">Editar Tarefa</Title>
						<Input
							style={boxShadowStyle}
							value={editingTask.task}
							onChange={(e) =>
								setEditingTask({
									...editingTask,
									task: e.target.value,
								})
							}
						/>
						<Container
							width="100%"
							className="form-edit_task"
						>
							<form onSubmit={handleUpdateTask}>
								<Button
									background="#fff"
									color="#000000"
									onClick={handleModal}
								>
									Cancelar
								</Button>
								<Button
									background="#45ce67"
									color="#fff"
									type="submit"
								>
									Salvar
								</Button>
							</form>
						</Container>
					</Container>
				</Modal>
			</ModalBg>
		</>
	);
};

export default ModalComp;
