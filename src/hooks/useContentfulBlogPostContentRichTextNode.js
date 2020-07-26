import { graphql, useStaticQuery } from "gatsby";

export default contentful_id => {
  const { allContentfulBlogPost } = useStaticQuery(
    graphql`
        query($id: String) {
            allContentfulBlogPost(filter: {id: {eq: $id}}) {
                edges {
                    node {
                        id
                        content {
                            content
                        }
                    }
                }
            }
        }
    `
  );
  console.error('id:', contentful_id)
console.warn(allContentfulBlogPost.edges)
  return allContentfulBlogPost.edges.find(edge => edge.node.id === contentful_id)?.node.content.content;
};