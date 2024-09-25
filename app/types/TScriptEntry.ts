import {TMetadata} from "./TMetadata";
import {TSysEntry} from "./TSys";

export type TScriptEntry = {
	fields: {
		name: string;
		position:
			| "After opening <head> tag"
			| "Before closing </head> tag"
			| "After opening <body> tag"
			| "Before closing </body> tag";
		script: string;
	};
} & TMetadata &
	TSysEntry;
