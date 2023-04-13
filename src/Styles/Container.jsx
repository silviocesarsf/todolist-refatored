import styled from "styled-components";

export const Container = styled.div`
	height: ${(props) => props.height};
	width: ${(props) => props.width};
	background-color: ${(props) => props.background};
	display: flex;
	align-items: ${(props) => (props.align ? props.align : "center")};
	justify-content: ${(props) =>
		props.justify ? props.justify : "center"};
	flex-direction: ${(props) => props.dir};
	gap: ${(props) => props.gap};
	text-align: ${(props) => props.textAlign};

	.inputs input {
		position: relative;
	}

	.inputs .add-icon {
		position: absolute;
		right: 18%;
		font-size: 2em;
	}

	.task {
		position: relative;
	}
	
	.add-icon,
	.sub-icon,
	.edit-icon {
		cursor: pointer;
	}

	.form-edit_task form {
		width: 100%;
		display: flex;
		justify-content: space-around;
	}

	.options-more {
		position: absolute;
		right: -30%;
		top: -30%;
		padding: 10px;
		border-radius: 10px;
		background: white;
		width: 120px;
		font-size: 0.6em;
	}

	.icon-more {
		position: absolute;
	}
`;
