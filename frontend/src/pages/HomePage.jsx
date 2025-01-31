import Frequence from "../components/Seance";
import Layout from "../components/Layout/Layout";
import logo from "../assets/Logo_W.png";
import { Link } from "react-router-dom";
import AnimatedBackground from "@components/BackgroundCanvas";


export default function HomePage() {
	return (
		<Layout>
      <Frequence />
    			<AnimatedBackground />
    </Layout>
	);
}
