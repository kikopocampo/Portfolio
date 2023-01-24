import "../styles/globals.css";
import { Rubik, Nunito } from "@next/font/google";

const rubik = Rubik({ subsets: ["latin"] });
const nunito = Nunito({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <main className={nunito.className}>
      <Component {...pageProps} />;
    </main>
  );
}
