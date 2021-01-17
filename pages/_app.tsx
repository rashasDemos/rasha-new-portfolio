import "../styles/globals.css";
import { AppProps } from "next/app";
import { ThemeProvider } from "theme-ui";
import theme from "../styles/theme";
import Favicon from "react-favicon";
import { NextSeo } from "next-seo";

const title = "Rasha Rahman Software Engineer Front End Product Developer"
const desc = "Rasha Rahman is a software product developer focused on front end engineering based in Los Angeles, CA. His current tech stack includes React, Next JS, and JSX. If Rasha is doing more back-end work, he uses PostgreSQL and NextJS SWR(Node) and also Prisma. Rasha is currently available for hire. Please contact him."
const web = "https://www.rasha.world/"

function MyApp({ Component, pageProps }: AppProps) {
  
  return (
    <ThemeProvider theme={theme}>
      <NextSeo
        title={title}
        description={desc}
        canonical={web}
        openGraph={{
          url: web,
          title: title,
          description: desc,
          images: [
            {
              url: "https://i.imgur.com/MW3NRnZ.jpg",
              width: 800,
              height: 600,
              alt: "Rasha Rahman Product Developer Front End Engineer Main Image",
            },]
        }}
        twitter={{
          handle: "@raaahhh_sha",
          site: "@raaahhh_sha",
          cardType: "summary_large_image",
        }}
      />

      <Favicon
        url={`https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.fineartamerica.com%2Fimages%2Fartworkimages%2Fmediumlarge%2F1%2Frainbow-spectral-circle-gradient-miroslav-nemecek.jpg&f=1&nofb=1`}
      />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
