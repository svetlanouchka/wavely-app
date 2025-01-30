import Frequence from "../components/Seance";
import logo from "../assets/Logo_W.png";

export default function Home() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>Wavely</p>

      <Frequence />

    </header>
  );
}
