import "../styles/globals.css";
import { Rubik, Nunito } from "@next/font/google";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import NavBar from "../components/Navbar";

const rubik = Rubik({ subsets: ["latin"] });
const nunito = Nunito({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <AnimatePresence
      mode="wait"
      initial={false}
      onExitComplete={() => window.scrollTo(0, 0)}
    >
      <NavBar />
      <Component {...pageProps} key={router.route} />
    </AnimatePresence>
  );
}
