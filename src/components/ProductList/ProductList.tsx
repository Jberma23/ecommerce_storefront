/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import { StarIcon } from "@heroicons/react/20/solid";
type Product = {
  description: string;
  featuredImage: {
    altText: string;
    height: number;
    width: number;
    url: string;
  };
  handle: string;
  id: string;
  productType: string;
  title: string;
  priceRange: {
    maxVariantPrice: {
      amount: string;
      currencyCode: string;
    };
    minVariantPrice: {
      amount: string;
      currencyCode: string;
    };
  };
} | null;

type edges = Product[];
export type ProductListProps = {
  products: Product[];
};

function formatPrice(product: Product) {
  if (
    product?.priceRange?.maxVariantPrice?.amount ===
    product?.priceRange?.minVariantPrice?.amount
  ) {
    return `${product?.priceRange?.maxVariantPrice?.amount} ${product?.priceRange?.maxVariantPrice?.currencyCode}`;
  } else {
    return `${product?.priceRange?.minVariantPrice?.amount} ${product?.priceRange?.minVariantPrice?.currencyCode} - ${product?.priceRange?.maxVariantPrice?.amount} ${product?.priceRange?.maxVariantPrice?.currencyCode}`;
  }
}
function formatProductID(product: Product) {
  return product?.id.split("gid://shopify/Product/")[1];
}

export const ProductList: React.FC<ProductListProps> = ({ products }) => {
  if (products) {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <a
                key={formatProductID(product)}
                href={"products/product" + formatProductID(product)}
                className="group"
              >
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src={product?.featuredImage?.url}
                    alt={product?.featuredImage?.altText}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product?.title}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">
                  {formatPrice(product)}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};
