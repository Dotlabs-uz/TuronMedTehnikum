import Head from "next/head";
import * as React from "react";

export interface IHeadMeta {}

const HeadMeta: React.FC<IHeadMeta> = () => {
    return (
        <Head>
            <title>Турон медицинский техникум</title>
            <meta
                name="description"
                content="Официальный сайт Турон медицинского техникума. Информация о программах обучения и событиях в учебном заведении."
            />
            <meta
                name="keywords"
                content="Турон, медицинский техникум, образование, студенты, программы обучения, Самарканд"
            />
            <meta http-equiv="Content-Language" content="ru" />
            <meta charSet="UTF-8" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <link
                rel="canonical"
                href="https://resplendent-zuccutto-be76bf.netlify.app/"
            />
            <meta name="author" content="Турон медицинский техникум" />
            <link rel="icon" type="image/png" href="/logo.png" />
            <meta property="og:title" content="Turon med texnikum" />
            <meta property="og:type" content="website" />
            <meta property="og:description" content="Турон медицинский техникум" />
            <meta
                property="og:url"
                content="https://resplendent-zuccutto-be76bf.netlify.app/"
            />
            <meta
                property="og:image"
                content="https://resplendent-zuccutto-be76bf.netlify.app/_ipx/w_128,q_75/%2Flogo.png"
            />
        </Head>
    );
};

export default HeadMeta;
