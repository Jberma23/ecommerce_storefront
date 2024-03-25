export const getFirstThreeCollections = `
query {
    collections(first: 3, reverse: true) {
      edges {
        node {
          id
          title
          handle
          updatedAt
          image {
            altText
            url
          }
        }
      }
    }
  }
  `;
