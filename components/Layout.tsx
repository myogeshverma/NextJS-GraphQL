import React,{ReactNode} from 'react';
import Header from './Header';
import Footer from './Footer'

interface IProps {
  children: ReactNode;
}

export default function Layout({children}:IProps) {
    return (
      <div className='layout'>
        <Header />
          {children}
        <Footer />
      </div>
    );
  }
