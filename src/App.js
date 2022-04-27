import { GlobalContextProvider } from "./contexts/GobalContext";
import Home from "./views/home/Home";

function App() {
  return (
    <GlobalContextProvider>
      <Home />
    </GlobalContextProvider>
  );
}

export default App;
