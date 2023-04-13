import React, { useContext } from "react";
import { Task } from "../Styles/Task";
import { GrSubtractCircle } from "react-icons/gr";
import { AiOutlineEdit } from "react-icons/ai";
import { Container } from "../Styles/Container";
import { ContextProvider } from "../context/Context";
import { Paragraph } from "../Styles/Paragraph";

const TaskComp = ({ todo, onDelete, handleModal }) => {
	const { boxShadowStyle, isMobile } = useContext(ContextProvider);

	return (
		<Task style={boxShadowStyle}>
			<Container
				className="task"
				height="100%"
				justify="space-between"
			>
				<Paragraph color="#000">{todo.task}</Paragraph>
				<Container gap={isMobile ? "10px" : "2rem"}>
					{isMobile ? (
						<>
							<GrSubtractCircle
								onClick={() => onDelete(todo.id)}
								className="sub-icon"
							/>
							<AiOutlineEdit
								className="edit-icon"
								onClick={() => handleModal(todo.id)}
							/>
						</>
					) : (
						<>
							<GrSubtractCircle
								onClick={() => onDelete(todo.id)}
								className="sub-icon"
							/>
							<AiOutlineEdit
								className="edit-icon"
								onClick={() => handleModal(todo.id)}
							/>
						</>
					)}
				</Container>
			</Container>
		</Task>
	);
};

export default TaskComp;
