import React from "react";

import {Helmet} from "react-helmet";

const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      
      <main style={{ minHeight: "70vh" }}>{children}</main>
      
    </div>
  );
};

export default Layout;