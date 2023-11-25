import TranslateContext from "@/context/useTranslate";
import ru from "@/languages/ru/ru";
import uz from "@/languages/uzb/uz";
import type { AppProps } from "next/app";
import { Open_Sans } from "next/font/google";
import { useRouter } from "next/router";
import "@/styles/globals.css";

const OpenSans = Open_Sans({ subsets: ["latin"], variable: "--body-font" });

export default function App({ Component, pageProps }: AppProps) {
    const router = useRouter();
    const { locale } = router;

    const translation = locale === "uz" ? uz : ru

    return (
        <TranslateContext.Provider value={translation}>
            <Component className={OpenSans.variable} {...pageProps} />
        </TranslateContext.Provider>
    );
}
