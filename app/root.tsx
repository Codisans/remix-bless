import {Outlet} from "@remix-run/react";
import {Layout} from "./layout";

export default function App() {
	return (
		<Layout>
			<Outlet />
		</Layout>
	);
}
