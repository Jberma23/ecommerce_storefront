import type { AppProps } from "next/app";
import "../app/globals.css";
import { Header } from "@/components/Header/Header";
import { createContext, useContext, useState } from "react";

export const CurrencyContext = createContext("USD");

export default function MyApp({ Component, pageProps }: AppProps) {
  const [currency, setCurrency] = useState("USD");
  return (
    <>
      <CurrencyContext.Provider value={currency}>
        <Header
          defaultCurrency={currency}
          HandleCurrencyChange={(event) => setCurrency(event.target.value)}
        />
        <Component {...pageProps} />
      </CurrencyContext.Provider>
    </>
  );
}
