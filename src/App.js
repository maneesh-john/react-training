import "./styles.css";
import Router from "./Router";
import AppProvider from "./contexts/AppContext";

export default function App() {
  return (
    <div>
      <AppProvider>
        <Router />
      </AppProvider>
    </div>
  );
}
