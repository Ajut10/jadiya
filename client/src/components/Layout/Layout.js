import React from 'react'
import Footer from './Footer'
import Header from './Header'
import {Helmet} from "react-helmet";

import toast, { Toaster } from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';

const Layout = ({children,tittle,description,keywords,author}) => {
  return (

      <div>
         <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content={description}/>
                <meta name="keywords" content={keywords}/>
                <meta name="author" content={author}/>
                <title>{tittle}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                
            </Helmet>
        <Header/>
        <main style={
            {minHeight:'70vh'}
        }>
            {
                children
            }
            <Toaster />
        </main>
          <Footer/>
      </div>
  )
}
Layout.defaultProps = {
    title: 'Jadiya',
    description: 'Liquor and beverage',
    author:'Yakacha',
    keywords: 'Jadiya'
}
export default Layout