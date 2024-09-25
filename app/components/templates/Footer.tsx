import {Symbol} from "~/components/atoms/Symbol";
// import {Button} from "../partials/Button";
// import {EscalatorNavLink} from "../escalator/EscalatorNavLink";

export function Footer() {
	// const {websiteSettings} = useRootLoaderData();
	// if (websiteSettings == null) return;

	// const footerRef = useRef<HTMLElement>(null);

	// useLayoutEffect(() => {
	// 	if (footerRef.current == null) return;

	// 	const tl = gsap
	// 		.timeline({
	// 			scrollTrigger: {
	// 				trigger: "main",
	// 				start: "bottom bottom",
	// 				end: "bottom top",
	// 				scrub: true,
	// 				invalidateOnRefresh: true,
	// 			},
	// 		})
	// 		.fromTo(
	// 			footerRef.current,
	// 			{
	// 				translateY: "12%",
	// 				opacity: 0.3,
	// 			},
	// 			{translateY: "0%", opacity: 1, ease: "none"},
	// 		);

	// 	return () => {
	// 		tl?.kill();
	// 	};
	// }, []);

	return (
		<footer
			// ref={footerRef}
			className="sticky min-h-screen top-0 bottom-0 flex flex-col px-gutter pt-header pb-4.5 lg:pb-8 dark bg-black text-white"
		>
			<div className="mt-auto lg:mb-auto">
				<div className="grid-layout py-14 lg:pt-8">
					<div className="col-start-1 col-end-11 lg:col-start-9 lg:col-end-12 lg:row-start-2">
						{/* <div className="flex flex-col items-start gap-y-6 lg:gap-y-8">
							<EscalatorText
								className="text-h4"
								text={websiteSettings.fields.footerText}
								tag="h4"
							/>
							<Button
								data={websiteSettings.fields.footerFeaturedLink}
							/>
						</div> */}
					</div>
					<div className="col-start-1 col-end-13 lg:row-start-2 lg:col-end-5 grid grid-cols-2 gap-x-grid-gap pt-12 lg:pt-0 text-h5">
						{/* <ul className="flex flex-col gap-y-2.25 lg:gap-y-4">
							<FooterMenu
								items={websiteSettings.fields.footerNavigation}
							/>
						</ul>
						<ul className="flex flex-col gap-y-2.25 lg:gap-y-4">
							<FooterSocials
								items={websiteSettings.fields.socialLinks}
							/>
						</ul> */}
					</div>
				</div>
			</div>
			<Symbol className="w-full" name="logotype" />
			<div className="grid lg:grid-cols-3 gap-x-grid-gap text-grey-lunar text-small pt-5 lg:pt-8">
				<ul className="flex lg:col-span-1">
					{/* <FooterLinks items={websiteSettings.fields.footerLinks} /> */}
				</ul>
				<div className="flex lg:col-span-1 lg:justify-end">
					<a
						className="termly-display-preferences underline-hover"
						onClick={(e) => {
							e.preventDefault();
						}}
					>
						Consent Preferences
					</a>
				</div>
				<div className="lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:text-center">
					© 2024 Over and Above Sports Group Limited
				</div>
			</div>
		</footer>
	);
}

// function FooterMenu(props: {items?: TSysLink[]}) {
// 	return props.items?.map((item, i) => (
// 		<li key={i}>
// 			<EscalatorNavLink className="underline-hover" data={item} />
// 		</li>
// 	));
// }

// function FooterSocials(props: {items?: TSysLink[]}) {
// 	return props.items?.map((item, i) => (
// 		<li key={i}>
// 			<EscalatorLink className="underline-hover" data={item} />
// 		</li>
// 	));
// }

// function FooterLinks(props: {items?: TSysLink[]}) {
// 	return props.items?.map((item, i) => (
// 		<li
// 			key={i}
// 			className={`flex ${
// 				i > 0 ? "before:content-['/'] before:mx-[1ch]" : ""
// 			}`}
// 		>
// 			<EscalatorNavLink className="underline-hover" data={item} />
// 		</li>
// 	));
// }
