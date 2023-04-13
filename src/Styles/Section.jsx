import styled from "styled-components";

export const Section = styled.section`
	min-height: 100vh;
	width: 100%;
	display: ${(props) => (props.display ? props.display : "inline")};
	align-items: ${(props) => (props.align ? props.align : "")};
	justify-content: ${(props) =>
		props.justify ? props.justify : ""};
	flex-direction: ${(props) => props.dir};
    
	&.home {
		position: relative;
		z-index: 1;
	}
`;
