import { Main } from "./views/Main/Main.js";
import { AppProviders } from "./components/AppProviders/AppProviders.jsx";
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  return (
    <AppProviders>
      <Main />
      <SpeedInsights />
    </AppProviders>
  );
}

export default App;
