import PageHead from "@/components/commons/pageHead/pageHead";
import "@/styles/globals.css";
import { HeroUIProvider } from "@heroui/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <HeroUIProvider>
      <PageHead title="Home" />
      <Component {...pageProps} />;
    </HeroUIProvider>
  );
}
