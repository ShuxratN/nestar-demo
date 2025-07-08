import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  console.log("DOCUMENT - PAGES ROUTER");
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="title" content="Nestar Demo" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" typeof="image/png" href=" " /> //RASM JOYLA

        { /** SEO */}
        <meta
        name="keyword"
        content={"nestar, nestar.uz, devex mern, mern nestjs fullstack"} />
        <meta 
        name="description"
        content={
          " Buy and sell properties anywhere in South Korea. | " +
          " Покупка и продажа недвижимости в любой точке Южной Кореи." +
          " 한국 어디에서나 부동산을 사고팔 수 있습니다."
        }
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
