import styled from "styled-components";

export const Paragraph = styled.p`
	color: ${(props) =>
		props.color ? props.color : props.theme.colors.text};
	font-size: ${(props) => props.fontSize};
	cursor: ${(props) => props.cursor};

	/* @media (max-width: 360px) {
		max-width: 30%;
	} */
`;
