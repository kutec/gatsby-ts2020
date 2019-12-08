import React from "react"
import Helmet from "react-helmet"
import Header from './header'
import { graphql, StaticQuery } from 'gatsby'

export default ({ pageMeta, children }) => (
  <>
    <StaticQuery
      query={graphql`
      {
        site {
          siteMetadata {
            title
            menuLinks {
              link
              name
            }
          }
        }
      }
    `}
      render={data => (
        <>
          <Helmet>
            {/* Setting the language of your page does not get more difficult than this! */}
            <html />

            {/* Add the customCssClass from our pageMeta prop to the document body */}

            <body className={pageMeta.customCssClass ? pageMeta.customCssClass : ''} />

            <title>{`${data.site.siteMetadata.title} | ${pageMeta.title}`}</title>

            {/* The charset, viewport and author meta tags will always have the same value, so we hard code them! */}
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="author" content="Bob Trustly" />

            {/* The rest we set dynamically with props */}
            <meta name="description" content={pageMeta.description} />

            {/* We pass an array of keywords, and then we use the Array.join method to convert them to a string where each keyword is separated by a comma */}
            <meta name="keywords" content={pageMeta.keywords.join(',')} />

            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
          </Helmet>
          <Header menuLinks={data.site.siteMetadata.menuLinks} siteTitle={data.site.siteMetadata.title} />
          <main>
            <section className="container">
              {children}
            </section>
          </main>
          <footer>
            <div className="container">
              {`${new Date().getFullYear()} No Rights Whatsoever Reserved`}
            </div>
          </footer>

          <script defer src="https://code.getmdl.io/1.3.0/material.min.js"></script>
          <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
        </>
      )}
    />
  </>
)
