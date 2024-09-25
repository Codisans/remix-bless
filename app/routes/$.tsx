// import {defer, json, useLoaderData} from "@remix-run/react";
// import type {LoaderFunctionArgs, MetaFunction} from "@shopify/remix-oxygen";
// import {getEntries} from "~/api/api";
// import {ContentPage} from "~/components/pages/ContentPage";
// import {TEntries, TEntry} from "~/types/TEntries";
// import {findPage} from "~/utils/findPage";

// export async function loader({context, request}: LoaderFunctionArgs) {
// 	const entries: TEntries = await getEntries(context);
// 	let path =
// 		request.url.split(context.env.PUBLIC_STOREFRONT_DOMAIN).pop() || "/";
// 	let categories = path.split("/").filter((c) => c != "");
// 	let slug = categories.pop() || "";

// 	const page = findPage(entries, categories, slug);

// 	if (page == null) {
// 		throw new Response(null, {status: 404});
// 	}

// 	return json(
// 		{
// 			page,
// 		},
// 		{
// 			headers: {
// 				"Set-Cookie": await context.session.commit(),
// 			},
// 		},
// 	);
// }

export default function CatchAllPage() {
	// const {page} = useLoaderData<typeof loader>();

	return <div>Hello world</div>;
}
