import React, { useContext } from "react";
import { Task } from "../Styles/Task";
import { GrSubtractCircle } from "react-icons/gr";
import { AiOutlineEdit } from "react-icons/ai";
import { Container } from "../Styles/Container";
import { ContextProvider } from "../context/Context";
import { AiOutlineMore } from "react-icons/ai";

const TaskComp = ({
	todo,
	onDelete,
	editing,
	setEditing,
	handleModal,
}) => {
	const { boxShadowStyle, isMobile, menuOption, setMenuOption } =
		useContext(ContextProvider);

	const handleMenuOption = () => {
		setMenuOption(!menuOption);
	};

	return (
		<Task style={boxShadowStyle}>
			<Container
				className="task"
				height="100%"
				justify="space-between"
			>
				{todo.task}
				<Container gap={isMobile ? "10px" : "2rem"}>
					{isMobile ? (
						<Container dir="column">
							{menuOption && (
								<Container
									style={boxShadowStyle}
									className="options-more"
									justify="space-around"
								>
									<GrSubtractCircle
										onClick={() =>
											onDelete(todo.id)
										}
										className="sub-icon"
									/>
									<AiOutlineEdit
										className="edit-icon"
										onClick={() =>
											handleModal(todo.id)
										}
									/>
								</Container>
							)}
							<AiOutlineMore
								className="icon-more"
								onClick={handleMenuOption}
							/>
						</Container>
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
