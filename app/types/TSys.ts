export type TSysLink = {
	sys: {
		id: string;
		linkType: string;
		type: "Link";
	};
};

export type TSysEntry = {
	sys: {
		contentType: TSysLink;
		createdAt: string;
		environment: TSysLink;
		id: string;
		locale: string;
		revision: string;
		space: TSysLink;
		type: "Entry";
		updatedAt: string;
	};
};
