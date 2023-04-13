import styled from "styled-components";

export const ListTasks = styled.div`
	background-color: ${(props) => props.theme.colors.primary};
	max-height: 60vh;
	width: 100%;
	border-radius: 30px;
	padding: 2rem;
	color: black;
	font-size: 2em;
	overflow-y: auto;
	transition: 1s;

	@media (max-width: 300px) {
		padding: 2rem 3rem;
		font-size: 1.6em;
	}
`;
