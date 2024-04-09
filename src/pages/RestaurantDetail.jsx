import { FaStar } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa";

const RestaurantDetail = ({ data }) => {
  return (
    <div className="flex gap-5 rounded-md">
      <img className="rounded-md w-[150px] max-md:w-[105px]" src={data.image} />
      <div className="flex flex-col justify-between">
        <p className="flex gap-5 ">
          <span className="flex gap-2 items-center">
            <FaArrowDown className="text-red-500" />
            min. {data.minimum_order_amount} $
          </span>
          <span className="flex gap-2 items-center">
            <FaRegClock className="text-red-500" />
            {data.estimated_delivery_time} dk
          </span>
        </p>
        <h2 className="text-3xl max-md:text-xl font-semibold">{data.name}</h2>
        <p className="flex items-center gap-2">
          <FaStar className="text-red-500" />
          {data.rating}
          <a
            className="text-red-500 font-semibold p-1 rounded hover:bg-red-100 transition"
            href="#"
          >
            Yorumları Gör
          </a>
        </p>
      </div>
    </div>
  );
};

export default RestaurantDetail;
