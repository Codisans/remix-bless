import {TMetadata} from "./TMetadata";
import {TSysEntry} from "./TSys";

export type TAssetEntry = {
	fields: {
		title: string;
		description: string;
		file: TFile;
	};
} & TMetadata &
	TSysEntry;

export type TFile = {
	contentType: string;
	fileName: string;
	url: string;
	details: TFileDetails;
};

export type TFileDetails = {
	size: number;
	image?: TImage;
};

export type TImage = {
	width: number;
	height: number;
};

export type TMediaFocalPoint =
	| "Bottom"
	| "Center"
	| "Left"
	| "Left-bottom"
	| "Left-top"
	| "Right"
	| "Right-bottom"
	| "Right-top"
	| "Top";
