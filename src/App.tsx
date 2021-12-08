import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';
import NotAuthLayout from 'dmf_layout/layout/NotAuthLayout';
import Header from 'dmf_layout/Header';
import Footer from 'dmf_layout/Footer';
import H1 from 'dmf_ui/typography/H1';

const App = () => (<>
  <NotAuthLayout header={<Header />} footer={<Footer />} className="u-demo">
      <div>
        <H1>Login Page</H1>
        
      </div>
    </NotAuthLayout>
    </>
);
ReactDOM.render(<App />, document.body);
