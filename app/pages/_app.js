// import `NextUIProvider` component
import { NextUIProvider } from "@nextui-org/react";
import "../styles/globals.css";
function MyApp({ Component, pageProps }) {
  return (
    // Use at the root of our app
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}
export default MyApp;
