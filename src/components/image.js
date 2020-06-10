import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image";
import styled from "styled-components"

const ExportedImage = styled(Image)`
  width: 100px;
  margin: auto;
`

const HeaderImage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "main-image.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <ExportedImage fluid={data.placeholderImage.childImageSharp.fluid} />
}

export default HeaderImage
