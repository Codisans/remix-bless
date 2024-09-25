import {TSysLink} from "~/types/TSys";
// import {
// 	TAccordionComponentEntry,
// 	TCardCarouselComponentEntry,
// 	THeroComponentEntry,
// 	TMediaComponentEntry,
// 	TPageHeadingComponentEntry,
// 	TPromoComponentEntry,
// 	TQuoteComponentEntry,
// 	TTextAndMediaComponentEntry,
// 	TTextComponentEntry,
// } from "~/types/TComponentEntry";
// import {TEntry} from "~/types/TEntries";

export function Components(props: {items?: TSysLink[]}) {
	const {items} = props;

	return <div>Components</div>;

	// return components.map((component) => {
	// 	switch (component?.sys.contentType.sys.id) {
	// 		case "accordionComponent":
	// 			return (
	// 				<AccordionComponent
	// 					key={component.sys.id}
	// 					data={component as TAccordionComponentEntry}
	// 				/>
	// 			);
	// 		case "cardCarouselComponent":
	// 			return (
	// 				<CardCarouselComponent
	// 					key={component.sys.id}
	// 					data={component as TCardCarouselComponentEntry}
	// 				/>
	// 			);
	// 		case "heroComponent":
	// 			return (
	// 				<HeroComponent
	// 					key={component.sys.id}
	// 					data={component as THeroComponentEntry}
	// 				/>
	// 			);
	// 		case "mediaComponent":
	// 			return (
	// 				<MediaComponent
	// 					key={component.sys.id}
	// 					data={component as TMediaComponentEntry}
	// 				/>
	// 			);
	// 		case "pageHeadingComponent":
	// 			return (
	// 				<PageHeadingComponent
	// 					key={component.sys.id}
	// 					data={component as TPageHeadingComponentEntry}
	// 				/>
	// 			);
	// 		case "productCardsComponent":
	// 			return (
	// 				<ProductCardsComponent
	// 					key={component.sys.id}
	// 					data={component as TProductCardsComponentEntry}
	// 				/>
	// 			);
	// 		case "promoCardsComponent":
	// 			return (
	// 				<PromoCardsComponent
	// 					key={component.sys.id}
	// 					data={component as TPromoCardsComponentEntry}
	// 				/>
	// 			);
	// 		case "promoComponent":
	// 			return (
	// 				<PromoComponent
	// 					key={component.sys.id}
	// 					data={component as TPromoComponentEntry}
	// 				/>
	// 			);
	// 		case "quoteComponent":
	// 			return (
	// 				<QuoteComponent
	// 					key={component.sys.id}
	// 					data={component as TQuoteComponentEntry}
	// 				/>
	// 			);
	// 		case "sizeGuideComponent":
	// 			return (
	// 				<SizeGuideComponent
	// 					key={component.sys.id}
	// 					data={component as TSizeGuideComponentEntry}
	// 				/>
	// 			);
	// 		case "snapCardComponent":
	// 			return (
	// 				<SnapCardComponent
	// 					key={component.sys.id}
	// 					data={component as TSnapCardComponentEntry}
	// 				/>
	// 			);
	// 		case "textAndMediaComponent":
	// 			return (
	// 				<TextAndMediaComponent
	// 					key={component.sys.id}
	// 					data={component as TTextAndMediaComponentEntry}
	// 				/>
	// 			);
	// 		case "textAndParallaxComponent":
	// 			return (
	// 				<TextAndParallaxComponent
	// 					key={component.sys.id}
	// 					data={component as TTextAndParallaxComponentEntry}
	// 				/>
	// 			);
	// 		case "textComponent":
	// 			return (
	// 				<TextComponent
	// 					key={component.sys.id}
	// 					data={component as TTextComponentEntry}
	// 				/>
	// 			);
	// 		case "textPromoComponent":
	// 			return (
	// 				<TextPromoComponent
	// 					key={component.sys.id}
	// 					data={component as TTextPromoComponentEntry}
	// 				/>
	// 			);
	// 		case "tickerBannerComponent":
	// 			return (
	// 				<TickerBannerComponent
	// 					key={component.sys.id}
	// 					data={component as TTickerBannerComponentEntry}
	// 				/>
	// 			);
	// 		case "twoColumnMediaComponent":
	// 			return (
	// 				<TwoColumnMediaComponent
	// 					key={component.sys.id}
	// 					data={component as TTwoColumnMediaComponentEntry}
	// 				/>
	// 			);
	// 	}
	// });
}
