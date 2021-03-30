import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import "boxicons/css/boxicons.min.css";

function MyApp({ Component, pageProps }) {
  const Layout = Component.layout || (({ children }) => <>{children}</>);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
