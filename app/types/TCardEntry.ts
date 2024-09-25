import {TMediaFocalPoint} from "./TAssetEntry";
import {TMetadata} from "./TMetadata";
import {TSysEntry, TSysLink} from "./TSys";

export type TCardEntry = {
	fields: TCardFields;
} & TMetadata &
	TSysEntry;

export type TCardFields = {
	preHeading?: string;
	title?: string;
	media?: TSysLink;
	mediaFocalPoint?: TMediaFocalPoint;
	link?: TSysLink;
};
