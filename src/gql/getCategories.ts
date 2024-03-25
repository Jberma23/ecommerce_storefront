export const getFirstFiveCategories = `
query {
  products(first: 5, reverse: true) {
    edges {
      node {
        productType
      }
    }
  }
}
`;
export const getFiveCategories = `
query {
  products(first: 1, reverse: true) {
    edges {
      node {
        metafield(key: "product_category", namespace: "custom"){
          value
        }
      }
    }
  }
}
`;
