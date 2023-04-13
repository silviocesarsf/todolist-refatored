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

	.inputs div {
		position: relative;
	}

	.inputs .add-icon {
		position: absolute;
		right: 5%;
		top: 50%;
		transform: translate(-50%, -50%);
		font-size: 2em;
	}

	.task {
		position: relative;
		flex-wrap: wrap;
		text-align: center;
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

	@media (max-width: 360px) {
		.sub-icon,
		.edit-icon {
			font-size: 0.8em;
		}
	}
`;
