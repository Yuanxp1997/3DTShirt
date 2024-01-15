import Home from "./pages/Home";
import Customizer from "./pages/Customizer";
import Canvas from "./canvas";

function App() {
  return (
    <main className="app transition-all ease-in supports-[height:100cqh]:h-[100cqh] supports-[height:100svh]:h-[100svh]">
      <Home />
      <Canvas />
      <Customizer />
    </main>
  );
}

export default App;
