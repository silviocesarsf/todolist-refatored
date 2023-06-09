import styled from "styled-components";
import { motion } from "framer-motion";

export const ModalBg = styled(motion.div)`
	min-height: 100vh;
	width: 100%;
	position: fixed;
	z-index: 1;
	left: 0;
	top: 0;
	background-color: #0000008b;
	transition: 0.5s;
`;
