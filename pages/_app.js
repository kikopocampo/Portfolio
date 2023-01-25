import "../styles/globals.css";
import { Rubik, Nunito } from "@next/font/google";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";

const rubik = Rubik({ subsets: ["latin"] });
const nunito = Nunito({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={router.route}
        initial="initialState"
        animate="animateState"
        exit="exitState"
        transition={{
          duration: 0.75,
        }}
        variant={{
          initialState: {
            opacity: 0,
          },
          animateState: {
            opacity: 1,
          },
          exitState: {
            opacity: 0,
          },
        }}
      >
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  );
}
