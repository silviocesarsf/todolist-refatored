import { darken } from "polished";
import styled from "styled-components";

export const Button = styled.button`
	background-color: ${(props) => props.background};
	color: ${(props) => props.color};
	border: ${(props) =>
		props.border === true ? "1px solid black" : ""};
	width: 120px;
	font-size: 1.2em;
	height: 50px;
	border-radius: 5px;
	transition: 0.5s;

	&:hover {
		background-color: ${(props) => darken(0.2, props.background)};
	}
`;
