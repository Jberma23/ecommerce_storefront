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
export const allProducts = `
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

export const getProductPriceRanges = `
query getProductPriceRanges($country: CountryCode) @inContext(country: $country) {
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
          compareAtPriceRange {
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
  
  variables
  {
    "country": "CA"
  }
  `;
