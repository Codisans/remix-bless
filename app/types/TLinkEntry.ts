import {TMetadata} from "./TMetadata";
import {TSysEntry, TSysLink} from "./TSys";

export type TLinkEntry = {
	fields: {
		label: string;
		entry?: TSysLink;
		url?: string;
		anchor?: string;
		openNewWindow: boolean;
	};
} & TMetadata &
	TSysEntry;
