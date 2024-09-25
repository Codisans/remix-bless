import {TMediaFocalPoint} from "./TAssetEntry";
import {TMetadata} from "./TMetadata";
import {TSysEntry, TSysLink} from "./TSys";

export type TComponentEntry = TComponentSettingsFields & TMetadata & TSysEntry;

export type TComponentSettingsFields = {
	fields: {
		anchor?: string;
	};
};

export type TAccordionComponentEntry = {
	fields: {
		text?: string;
		items?: TSysLink[];
	};
} & TComponentEntry;

export type TAccordionItemEntry = {
	fields: {
		heading: string;
		text?: string;
	};
} & TMetadata &
	TSysEntry;

export type TCardCarouselComponentEntry = {
	fields: {
		preHeading?: string;
		heading?: string;
		cards?: TSysLink[];
		isDark: boolean;
	};
} & TComponentEntry;

export type THeroComponentEntry = {
	fields: {
		heading?: string;
		summary?: string;
		media?: TSysLink;
		mediaFocalPoint?: TMediaFocalPoint;
		mediaMobile?: TSysLink;
	};
} & TComponentEntry;

export type TMediaComponentEntry = {
	fields: {
		heading?: string;
		media?: TSysLink;
		mediaFocalPoint?: TMediaFocalPoint;
		mediaMobile?: TSysLink;
		videoPlayLabel: string;
		videoPosterImage: TSysLink;
		twoColumnMedia: TSysLink[];
	};
} & TComponentEntry;

export type TPageHeadingComponentEntry = {
	fields: {
		headingTopLine: string;
		headingBottomLine?: string;
		text?: string;
	};
} & TComponentEntry;

export type TPromoCardsComponentEntry = {
	fields: {
		name?: string;
		cards: TSysLink[];
	};
} & TComponentEntry;

export type TPromoComponentEntry = {
	fields: {
		heading: string;
		summary?: string;
		link?: TSysLink;
		media: TSysLink;
		mediaFocalPoint?: string;
	};
} & TComponentEntry;

export type TQuoteComponentEntry = {
	fields: {
		quote: string;
		quoteReference?: string;
		media?: TSysLink;
		mediaFocalPoint?: string;
		productCards?: TSysLink[];
	};
} & TComponentEntry;

export type TTextComponentEntry = {
	fields: {
		preHeading?: string;
		text: string;
		link?: TSysLink;
		textOnLeft: boolean;
		wideText: boolean;
	};
} & TComponentEntry;

export type TTextAndMediaComponentEntry = {
	fields: {
		preHeading?: string;
		text?: string;
		link?: TSysLink;
		media?: TSysLink;
		textOnLeft: boolean;
		mediaIsNarrow: boolean;
	};
} & TComponentEntry;
