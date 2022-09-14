import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './header';
import Main from './main';
import Footer from './footer';


const root = ReactDOM.createRoot(document.getElementById('header-content'));
root.render(
    <Header />
);

const main = ReactDOM.createRoot(document.querySelector('main'));

main.render(
    <Main />
);

const footer = ReactDOM.createRoot(document.querySelector('footer'));

footer.render(
  <Footer />
);


