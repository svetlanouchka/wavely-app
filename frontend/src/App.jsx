import "./App.css";
import HomePage from "./pages/HomePage";
import Router from "./Router";
import { RouterProvider } from "react-router-dom";

function App() {
	return (
		<>
			<RouterProvider router={Router}>
				<HomePage />
			</RouterProvider>
		</>
	);
}

export default App;
