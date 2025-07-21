import { createContext, useState } from 'react';
import React from 'react';
import PropTypes from 'prop-types';
import Layout from './layout';
import "../styles/navbar.css";
import "../styles/footer.css";
import "../styles/style.css";
import "../styles/mobile.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const AppContext = createContext();

function App({ Component, pageProps }) {
  const [user, setUser] = useState(null);

  return (
    <AppContext.Provider value={{ user, setUser }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppContext.Provider>
  );
}

// PropTypes validation
App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object,
};

// Default props
App.defaultProps = {
  pageProps: {},
};

export { AppContext };
export default App;