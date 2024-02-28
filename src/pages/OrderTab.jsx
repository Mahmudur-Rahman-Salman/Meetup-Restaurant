// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
import Foodcard from "./Foodcard";

const OrderTab = ({ items }) => {
  return (
    <div>
      {/* <Swiper
        Pagination={Pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          
        </SwiperSlide>
      </Swiper> */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-center md:justify-center gap-10">
        {items.map((item) => (
          <Foodcard key={item._id} item={item}></Foodcard>
        ))}
      </div>
    </div>
  );
};

export default OrderTab;
