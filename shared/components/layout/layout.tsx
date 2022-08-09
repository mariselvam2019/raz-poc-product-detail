import { Fragment } from 'react';

import Header from '../header/header';
import Footer from '../footer/footer';

function Layout(props :any) {
  return (
    <div className='container mx-auto px-10'>
      <Header/>
      <main className='min-h-full'>{props.children}</main>
      <Footer/>
    </div>
  );
}

export default Layout;
