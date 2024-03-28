import { StarIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";

export type ProductReviewsProps = {
  productRating?: any;
};

export const ProductReviews: React.FC<ProductReviewsProps> = ({
  productRating,
}) => {
  return (
    <>
      <div className="mt-3">
        <h3 className="sr-only">Reviews</h3>
        <div className="flex items-center">
          <div className="flex items-center">
            {[0, 1, 2, 3, 4].map((rating) => (
              <StarIcon
                key={rating}
                className={clsx(
                  productRating > rating ? "text-indigo-500" : "text-gray-300",
                  "h-5 w-5 flex-shrink-0"
                )}
                aria-hidden="true"
              />
            ))}
          </div>
          <p className="sr-only">{productRating} out of 5 stars</p>
        </div>
      </div>
    </>
  );
};
