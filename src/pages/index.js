import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge => (
      <Link className="post-link" to={edge.node.frontmatter.slug}>
        {edge.node.frontmatter.title}
      </Link>
    ))
  return (
    <div class="homepage">
      <div class="header">coffee in words out</div>
      {Posts}
    </div>
  )
}
export default IndexPage
export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "YYYY-MM-DD")
            slug
            title
          }
        }
      }
    }
  }
`
