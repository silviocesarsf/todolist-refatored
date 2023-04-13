import styled from "styled-components";

export const Title = styled.h1`
	color: ${props => props.color};
	font-size: ${(props) =>
		props.fontSize ? props.fontSize : "2.5em"};
	text-align: center;
`;
