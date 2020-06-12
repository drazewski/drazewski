import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image";
import styled from "styled-components"

const ExportedImage = styled(Image)`
  width: 400px;
  margin: auto;
`

const HeaderImage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "main-image5.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <ExportedImage fluid={data.placeholderImage.childImageSharp.fluid} />
}

export default HeaderImage
