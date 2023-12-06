import Head from "next/head";
import * as React from "react";

export interface IHeadMeta {}

const HeadMeta: React.FC<IHeadMeta> = () => {
    return (
        <Head>
            <title>Турон медицинский техникум</title>
            <meta name="description" content="Официальный сайт Турон медицинского техникума в Самарканде. Информация о программах обучения и событиях в учебном заведении."/>
            <meta name="keywords" content="Турон, медицинский техникум, образование, студенты, программы обучения"/>
            <meta name="description" content="Турон тиббий техникуми расмий веб-сайти. Таълим дастурлари ва муассасалари ҳақида маълумот."/>
            <meta name="keywords" content="Turon, Turon med texnikumi, Samarqand med texnikumi,texnikum, med" />
            <meta httpEquiv="Content-Language" content="uz" />
            <meta charSet="UTF-8" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <link
                rel="canonical"
                href="https://turon-tibbiyot-texnikum.uz/"
            />
            <meta name="author" content="Турон медицинский техникум" />
            <link rel="icon" type="image/png" href="/logo.png" />
            <meta property="og:title" content="Turon med texnikum" />
            <meta property="og:type" content="website" />
            <meta
                property="og:description"
                content="Турон медицинский техникум"
            />
            <meta
                property="og:url"
                content="https://turon-tibbiyot-texnikum.uz/"
            />
            <meta
                property="og:image"
                content="https://turon-tibbiyot-texnikum.uz/_ipx/w_128,q_75/%2Flogo.png"
            />
        </Head>
    );
};

export default HeadMeta;
