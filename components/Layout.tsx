import React, { ReactNode, useEffect, useState } from 'react'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'


interface Props {
  children: ReactNode,
  showFooter: boolean
}

const Layout: React.FunctionComponent<Props> = ({ children, showFooter }: Props) => {
  return (
    <div id="wrapper">
      <Head>
        <title>Open Pediatrics</title>
        <meta charSet="UTF-8" />
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <meta name="author" content="" />
        <link rel="profile" href="#" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="format-detection" content="telephone-no" />
        <link rel="stylesheet" href="css/plugins.css" />
        <link rel="stylesheet" href="css/style.css"></link>
      </Head>
      <span className="menu-btn overlay"> </span>
      <Header />
      {children}
      {showFooter && (
        <Footer />
      )}
    </div>
  )
}

export default Layout
