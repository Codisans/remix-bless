import {TAssetEntry} from "./TAssetEntry";
import {THeroComponentEntry} from "./TComponentEntry";
import {TLinkEntry} from "./TLinkEntry";
import {
	TArticleListingPageEntry,
	TArticlePageEntry,
	THomePageEntry,
	TPageEntry,
} from "./TPageEntry";
import {TWebsiteSettingsEntry} from "./TWebsiteSettingsEntry";

export type TEntries = {
	includes: {
		Asset: TAssetEntry[];
	};
	items: TEntry[];
	limit: number;
	skip: number;
	total: number;
};

export type TEntry =
	| TArticleListingPageEntry
	| TArticlePageEntry
	| THeroComponentEntry
	| THomePageEntry
	| TLinkEntry
	| TPageEntry
	| TWebsiteSettingsEntry;
