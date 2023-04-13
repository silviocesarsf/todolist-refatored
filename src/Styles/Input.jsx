import styled from "styled-components";
import { darken, lighten } from "polished";

export const Input = styled.input`
	height: 10vh;
	width: 100%;
	border-radius: 30px;
	background-color: white;
	padding: 1rem 2rem;
	font-size: 2em;
	color: ${(props) => darken(0.8, props.theme.colors.text)};

	@media (max-width: 768px) {
		font-size: 1.6em;
		height: 15vh;
	}
`;
