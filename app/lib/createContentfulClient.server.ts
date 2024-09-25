import {RemixContextObject} from "@remix-run/react/dist/entry";

// export function createContentfulClient({
// 	env,
// }: {
// 	env: Env;
// }) {
// 	// const withCache = createWithCache({cache, waitUntil});
// 	const baseUrl = `${env.CONTENTFUL_BASE_URL}/spaces/${env.CONTENTFUL_SPACE_ID}/environments/${env.CONTENTFUL_ENVIRONMENT}`;

// 	async function query<T = any>(
// 		endpoint: string,
// 		options: {
// 			variables?: object;
// 			cache: AllCacheOptions;
// 		} = {variables: {}, cache: CacheLong()},
// 	) {
// 		return withCache(
// 			[baseUrl, endpoint, JSON.stringify(options.variables)],
// 			options.cache,
// 			async function () {
// 				// call to the API
// 				const url = `${baseUrl}/${endpoint}?access_token=${env.CONTENTFUL_ACCESS_TOKEN}&limit=1000`;
// 				const response = await fetch(url, {
// 					method: "GET",
// 					headers: {
// 						"Content-type": "application/json",
// 					},
// 					// body: JSON.stringify({
// 					//   variables: options.variables,
// 					// access_token: env.CONTENTFUL_ACCESS_TOKEN,
// 					// }),
// 				});

// 				if (!response.ok) {
// 					throw new Error(
// 						`Error fetching from contentful: ${response.statusText}`,
// 					);
// 				}

// 				const json = await response.json<{data: T; error: string}>();

// 				return json;
// 			},
// 		);
// 	}

// 	return {query};
// }
