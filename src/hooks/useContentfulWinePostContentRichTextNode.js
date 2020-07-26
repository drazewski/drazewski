import { graphql, useStaticQuery } from "gatsby";

export default contentful_id => {
  const { allContentfulWinePost } = useStaticQuery(
    graphql`
        query($id: String) {
            allContentfulWinePost(filter: {id: {eq: $id}}) {
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
console.warn(allContentfulWinePost.edges)
  return allContentfulWinePost.edges.find(edge => edge.node.id === contentful_id)?.node.content.content;
};