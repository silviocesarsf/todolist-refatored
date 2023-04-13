import { createContext, useState } from "react";
import { useMediaQuery } from "react-responsive";

export const ContextProvider = createContext();

export const Context = ({ children }) => {
	const boxShadowStyle = {
		boxShadow: "rgba(73, 73, 73, 0.336) 0px 2px 4px 1px",
	};

	const isMobile = useMediaQuery({
		query: "(max-width: 768px)",
	});

	return (
		<ContextProvider.Provider
			value={{
				boxShadowStyle,
				isMobile,
			}}
		>
			{children}
		</ContextProvider.Provider>
	);
};
