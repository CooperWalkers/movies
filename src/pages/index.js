import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Review from "../components/Review"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const {
    allContentfulReview: { edges: reviews },
  } = useStaticQuery(graphql`
    query ArticlesQuery {
      contentfulAuthor {
        name
        photo {
          file {
            url
          }
        }
      }
      allContentfulReview {
        edges {
          node {
            id
            title
            text {
              text
            }
            poster {
              file {
                url
              }
            }
            creationDate
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      {reviews.map(({ node }) => (
        <Review key={node.id} content={node} />
      ))}
    </Layout>
  )
}

export default IndexPage
