import "@/styles/globals.css";
import { store } from "@services/store";
import { Provider } from "react-redux";

export const metadata = {
  title: "AI Prompt",
  description: "Discover & Share AI Prompts",
};

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <div className="main">
        <div className="gradient" />
      </div>

      <main className="app">
        <Component {...pageProps} />
      </main>
    </Provider>
  );
}
