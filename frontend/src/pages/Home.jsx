import Frequence from "../components/Frequence";
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
