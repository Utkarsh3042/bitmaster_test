import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App"; // Default export should be imported without curly braces
import { ThirdwebProvider } from "@thirdweb-dev/react";

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <ThirdwebProvider>
      <App />
    </ThirdwebProvider>
  </React.StrictMode>
);
