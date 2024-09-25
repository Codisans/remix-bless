import {TMetadata} from "./TMetadata";
import {TScriptSettings} from "./TScriptSettings";
import {TSysEntry, TSysLink} from "./TSys";

export type TWebsiteSettingsEntry = {
	fields: {
		defaultCardImage?: TSysLink;
		defaultSeoTitleFormat?: string;
		defaultSharingImage?: TSysLink;
		errorPage?: TSysLink;
		featuredLink?: TSysLink;
		footerLinks?: TSysLink[];
		footerNavigation?: TSysLink[];
		footerText?: string;
		headerNavigation?: TSysLink[];
		hideFromSearchEngines: boolean;
		socialLinks?: TSysLink[];
		title: string;
	} & TScriptSettings;
} & TSysEntry &
	TMetadata;
