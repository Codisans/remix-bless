import {NavLink} from "@remix-run/react";
import {Symbol} from "~/components/atoms/Symbol";
import {TSysLink} from "~/types/TSys";

export function Header() {
	// const {websiteSettings} = useRootLoaderData();

	// if (websiteSettings == null) return;

	return (
		<header
			data-lenis-prevent
			className="sticky -top-header -mb-header left-0 w-viewport h-header flex flex-col bg-white/50 text-black transparent-header:bg-transparent transparent-header:backdrop-blur-none transparent-header:text-white uppercase z-header menu-open:text-black header-visible:top-0 page-scrolled:bg-white/50 backdrop-blur-md page-scrolled:backdrop-blur-md page-scrolled:text-black transition-[color,background-color,top,backdrop-filter] ease-in-out duration-500"
		>
			<div className="px-gutter w-full grid-layout my-auto">
				<div className="col-start-1 col-end-7 lg:col-end-3">
					<NavLink to="/">
						<span className="sr-only">O+A Logo</span>
						<Symbol
							className="short-logo:block hidden w-[2.125rem] h-[1.375rem] lg:w-[2.3125rem] lg:h-6"
							name="logo"
						/>
						<Symbol
							className="short-logo:hidden w-[9.8125rem] h-[1.375rem] lg:w-[10.75rem] lg:h-6"
							name="logotype"
						/>
					</NavLink>
				</div>
				<div className="fixed w-viewport clip-container-b-full menu-open:clip-container lg:clip-container z-behind invisible [transition:clip-path_500ms_ease-in-out,visibility_0s_500ms] menu-open:[transition:clip-path_500ms_ease-out,visibility_0s_0s] lg:visible menu-open:visible top-0 left-0 h-dvh lg:z-auto lg:h-auto bg-white text-black lg:bg-transparent lg:text-current lg:static lg:col-start-3 lg:col-end-11 lg:flex lg:items-center lg:justify-center">
					<nav className="pt-20 h-full lg:pt-0 lg:h-auto flex items-center justify-center -translate-y-4 opacity-0 lg:opacity-100 lg:transform-none menu-open:translate-y-0 menu-open:opacity-100 transition-[transform,opacity] ease-in-out duration-mobile-menu">
						<ul className="w-full flex flex-col items-center h-full gap-y-8 py-8 lg:py-0 lg:w-auto lg:flex-row gap-x-5 xl:gap-x-10 text-pre overflow-y-auto lg:h-auto lg:overflow-y-hidden">
							{/* {renderMenu(
								websiteSettings.fields.headerNavigation,
							)}
							<li
								className={
									"-lg:hidden -lg:first:mt-auto flex flex-col items-center lg:flex-row gap-y-8 gap-x-5 xl:gap-x-10 flex-nowrap"
								}
							>
								<Symbol
									className="w-1.75 h-1.75 text-grey"
									name="plus"
								/>
							</li> */}
						</ul>
					</nav>
				</div>
			</div>
		</header>
	);
}

// function renderMenu(menu?: TSysLink[]): React.ReactNode {
// 	if (menu == null) return;

// 	return menu.map((item, i: number) => (
// 		<li
// 			key={i}
// 			className={
// 				"first:mt-auto lg:first:mt-0 flex flex-col items-center lg:flex-row gap-y-8 gap-x-5 xl:gap-x-10 flex-nowrap"
// 			}
// 		>
// 			{i !== 0 && (
// 				<Symbol className="w-1.75 h-1.75 text-grey" name="plus" />
// 			)}
// 			<EscalatorNavLink className="underline-hover" data={item} />
// 		</li>
// 	));
// }
