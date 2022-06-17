import 'tailwindcss/tailwind.css'
import type { AppProps } from "next/app";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { ThemeProvider } from "next-themes";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <ThemeProvider attribute="class" enableSystem={false}>
        <Navigation />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default MyApp;
