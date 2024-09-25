/// <reference types="@remix-run/dev" />

// Enhance TypeScript's built-in typings.
import "@total-typescript/ts-reset";
import Lenis from "lenis";

declare global {
	interface Window {
		lenis?: Lenis;
	}

	/**
	 * A global `process` object is only available during build to access NODE_ENV.
	 */
	const process: {env: {NODE_ENV: "production" | "development"}};

	/**
	 * Declare expected Env parameter in fetch handler.
	 */
	interface Env {
		CONTENTFUL_ACCESS_TOKEN: string;
		CONTENTFUL_BASE_URL: string;
		CONTENTFUL_ENVIRONMENT: string;
		CONTENTFUL_SPACE_ID: string;
		PUBLIC_DOMAIN: string;
	}
}
