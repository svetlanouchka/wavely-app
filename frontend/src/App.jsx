import "./App.css";
import HomePage from "./pages/HomePage";
import Router from "./Router";
import { RouterProvider } from "react-router-dom";
import { UserProvider } from "./context/UserContext";

function App() {
	return (
		<>
			<UserProvider>
				<RouterProvider router={Router}/>
			</UserProvider>
		</>
	);
}

export default App;
