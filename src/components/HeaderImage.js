import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image";
import styled from "styled-components"

const ExportedImage = styled(Image)`
  margin: auto;
`

const HeaderImage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "grapes.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <ExportedImage fluid={data.placeholderImage.childImageSharp.fluid} />
}

export default HeaderImage
