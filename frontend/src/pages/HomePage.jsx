import Frequence from "../components/Seance";
import Layout from "../components/Layout/Layout";
import logo from "../assets/Logo_W.png";
import { Link } from "react-router-dom";


export default function HomePage() {
	return (
		<Layout>
      <Frequence />
    </Layout>

	);
}
