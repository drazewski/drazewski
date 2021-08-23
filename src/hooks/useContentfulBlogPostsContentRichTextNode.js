import { graphql, useStaticQuery } from "gatsby";

export default contentful_id => {
  const { allContentfulBlogPosts } = useStaticQuery(
    graphql`
        query($id: String) {
            allContentfulBlogPosts(filter: {id: {eq: $id}}) {
                edges {
                    node {
                        id
                        content {
                            raw
                        }
                    }
                }
            }
        }
    `
  );

  return allContentfulBlogPosts.edges.find(edge => edge.node.id === contentful_id)?.node.content.raw;
};