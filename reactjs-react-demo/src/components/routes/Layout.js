import React from 'react'
import Footer from '../Footer'
const Layout = ({ children , includeFooter = false }) => {
    return (
        <>
            {children}
            {includeFooter && <Footer />}
        </>
    )
}

export default Layout