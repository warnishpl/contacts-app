import { Main } from "./views/Main/Main.js";
import { AppProviders } from "./components/AppProviders/AppProviders.jsx";

function App() {
  return (
    <AppProviders>
      <Main />
    </AppProviders>
  );
}

export default App;
