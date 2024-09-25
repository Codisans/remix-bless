import {TMediaFocalPoint} from "./TAssetEntry";
import {TMetadata} from "./TMetadata";
import {TSysEntry, TSysLink} from "./TSys";

export type THomePageEntry = TPageEntry;

export type TArticleListingPageEntry = {
	fields: {
		noResultsText: string;
	};
} & TPageEntry;

export type TArticlePageEntry = {
	fields: {
		author: TSysLink;
		date: string;
		image: TSysLink;
	};
} & TPageEntry;

export type TPageEntry = TPageFields & TMetadata & TSysEntry;

export type TPageFields = {
	fields: {
		title: string;
	} & TPageComponents &
		TPageCardSettings &
		TPageSeoSettings &
		TPageSharingSettings &
		TPageUrlSettings;
};

export type TPageComponents = {
	components: TSysLink[];
};

export type TPageCardSettings = {
	cardTitle?: string;
	cardPreHeading?: string;
	cardMedia?: TSysLink;
	cardMediaFemale?: TSysLink;
	cardMediaFocalPoint?: TMediaFocalPoint;
};

export type TPageSeoSettings = {
	seoTitle?: string;
	seoDescription?: string;
	sitemapChangeFrequency: string;
	sitemapPriority: number;
	excludeFromSitemap: boolean;
	disallowInRobotsTxt: boolean;
	robotsMetaTag?: string[];
};

export type TPageSharingSettings = {
	sharingTitle?: string;
	sharingDescription?: string;
	sharingImage?: TSysLink;
};

export type TPageUrlSettings = {
	categories?: string[];
	slug: string;
};
