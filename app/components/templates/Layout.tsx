// import {Await} from '@remix-run/react';
// import {Suspense} from 'react';
import {Footer} from "./Footer";
import {Header} from "./Header";
import {motion} from "framer-motion";
import {useLocation} from "@remix-run/react";
import {Dispatch, SetStateAction, createContext, useState} from "react";

export type TLayoutContext = {};

export const LayoutContext = createContext<TLayoutContext>({});

export function Layout(props: {children?: React.ReactNode}) {
	const {children} = props;

	return (
		<LayoutContext.Provider value={{}}>
			<Header />
			<main className="relative z-10 min-h-screen bg-white text-black clip-container">
				{/* <motion.div
					key={useLocation().pathname}
					initial={{opacity: 0}}
					animate={{opacity: 1}}
					exit={{opacity: 0}}
					transition={{duration: 0.5, delay: 0.2}}
				>
					{children}
				</motion.div> */}
				{children}
			</main>
			<Footer />
		</LayoutContext.Provider>
	);
}
