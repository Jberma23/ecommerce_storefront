// export const getProductGraphqlQuery = `
// query {
//     products(first: 10, reverse: true) {
//       edges {
//         node {
//           id
//           title
//           handle
//           description
//           price {
//                 amount
//                 currencyCode #active local currency
//               }
//           featuredImage{
//             altText
//             height
//             width
//             url
//           }
//           productType
//         }
//       }
//     }
//   }
// `;
export const allProducts = `#graphql
query allProducts($country: CountryCode) @inContext(country: $country) {
    products(first: 10) {
      edges {
        node {
          title
          id
          handle
          description
          productType
          featuredImage{
            altText
            height
            width
            url
          }
          priceRange {
            minVariantPrice {
              amount
              currencyCode  #active local currency
            }
            maxVariantPrice {
              amount
              currencyCode
            }
          }
          variants(first:1) {
            edges {
              node {
                id
                title
                
                price {
                  amount
                  currencyCode #active local currency
                }
              }
            }
          }
        }
      }
    }
  }
  `;

export const getProductPriceRanges = `#graphql
  query getProductPriceRanges {
    products(first: 1) {
      edges {
        node {
          title
          priceRange {
            minVariantPrice {
              amount
              currencyCode  #active local currency
            }
            maxVariantPrice {
              amount
              currencyCode
            }
          }
        }
      }
    }
  }
  `;

export const allProductsByCollection = `#graphql
query allProductsByCollection($handle: String){
    products(query: $handle, first: 10) {
      edges {
        node {
          title
          id
          handle
          description
          productType
          featuredImage{
            altText
            height
            width
            url
          }
          priceRange {
            minVariantPrice {
              amount
              currencyCode  #active local currency
            }
            maxVariantPrice {
              amount
              currencyCode
            }
          }
        }
      }
    }
  }
  `;

export const GetProductById = `#graphql
query GetProductsById($id: ID!) {
  product(id: $id) {
    title
    id
    handle
    description
    productType
    featuredImage{
      altText
      height
      width
      url
    }
    images {
      altText
      height
      width
      url
    }
    priceRange {
      minVariantPrice {
        amount
        currencyCode  #active local currency
      }
      maxVariantPrice {
        amount
        currencyCode
      }
    }
  }
}
  `;
