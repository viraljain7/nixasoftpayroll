import React from 'react'

function Layout({children, className}) {
  return (
    <div className={`mx-auto max-w-7xl  h-full ${className}`}>
      {children}
    </div>
  )
}

export default Layout
