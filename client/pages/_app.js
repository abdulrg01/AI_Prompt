import "@/styles/globals.css";
import Nav from "./components/Nav";
import { store } from "@redux/store";
import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react"

export const metadata = {
  title: "AI Prompt",
  description: "Discover & Share AI Prompts",
};

export default function App({ Component, pageProps}) {
  return (
    <Provider store={store}>
      <SessionProvider>
        <div className="main">
          <div className="gradient" />
        </div>

        <main className="app">
          <Nav />
          <Component {...pageProps} />
        </main>
      </SessionProvider>
    </Provider>
  );
}
