import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import { ThemeProvider } from "./hooks/useTheme";

 
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

serviceWorkerRegistration.register();
//serviceWorkerRegistration.unregister();
/* if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then((reg) => console.log("Сервисный работник зарегистрирован", reg))
      .catch((err) => console.error("Ошибка регистрации сервисного работника", err));
  });
} */