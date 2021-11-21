import DefaultLayout from '@/components/Layout/DefaultLayout';
import { getStores, StoreProvider } from '@stores/index';

require('@/styles/styles.less');

const layouts = {
  DefaultLayout,
};

export default function MyApp({ Component, pageProps }) {
  const stores = getStores();

  // Use the layout defined at the page level, if available
  const Layout = layouts[Component.layout] || layouts.DefaultLayout;

  return (
    <StoreProvider value={stores}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StoreProvider>
  );
}
