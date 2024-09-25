import {Links, Meta, Scripts, ScrollRestoration} from "@remix-run/react";
import {ReactLenis, useLenis} from "lenis/react";

import "./main.css";
// import syles from "./main.css";

import gsap from "gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import {createContext, useEffect} from "react";
import {Header} from "./components/templates/Header";
import {Footer} from "./components/templates/Footer";

export type TAppContext = {};

export const AppContext = createContext<TAppContext>({});

export function Layout({children}: {children: React.ReactNode}) {
	let scrollPos = 0;

	let lenis = useLenis(({scroll}) => {
		ScrollTrigger.update();

		const header = document.querySelector("header");

		if (header == null) return;

		if (scroll > scrollPos) {
			document.documentElement.classList.remove("header-visible");
		}

		if (scroll + 4 < scrollPos) {
			document.documentElement.classList.add("header-visible");
		}

		document.documentElement.classList.toggle(
			"page-scrolled",
			scroll > header.offsetHeight,
		);
		scrollPos = scroll;
	});

	const getScrollbarWidth = () => {
		const wrapper = window.lenis?.options.wrapper;
		const content = window.lenis?.options.content;
		if (!wrapper || !content) {
			return;
		}
		return (
			((wrapper as Window).innerWidth ||
				(wrapper as HTMLElement).clientWidth) - content.clientWidth
		);
	};

	const setScrollLock = (): void => {
		const content = window.lenis?.options.content;
		content?.style.setProperty(
			"--scrollbar-gutter",
			`${getScrollbarWidth()}px`,
		);
		window.lenis?.stop();
	};

	const clearScrollLock = (): void => {
		const content = window.lenis?.options.content;
		content?.style.removeProperty("--scrollbar-gutter");
		window.lenis?.start();
	};

	useEffect(() => {
		if (lenis == null) return;

		window.lenis = lenis;
		gsap?.registerPlugin(ScrollTrigger);

		const updateLenis = (time: number) => {
			lenis?.raf(time * 1000);
		};

		const resizeObserver = new ResizeObserver(() => {
			requestAnimationFrame(() => {
				ScrollTrigger.refresh();
			});
		});

		ScrollTrigger.clearScrollMemory("manual");
		ScrollTrigger.refresh();

		gsap.ticker.add(updateLenis);

		if (lenis?.options.content) {
			resizeObserver.observe(lenis.options.content);
		}

		return () => {
			resizeObserver?.disconnect();
			gsap.ticker.remove(updateLenis);
		};
	}, [lenis]);

	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<Meta />
				<Links />
			</head>
			<body>
				<AppContext.Provider value={{}}>
					<ReactLenis root autoRaf={false}>
						<Header />
						<main>{children}</main>
						<Footer />
					</ReactLenis>
				</AppContext.Provider>
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}
