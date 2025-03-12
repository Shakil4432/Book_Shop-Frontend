import { Carousel } from "antd";

const Banner = () => {
  return (
    <div>
      <Carousel autoplay>
        <div>
          <img
            src="https://bucket.pk/wp-content/uploads/2024/07/2.jpg"
            alt="Banner 1"
            style={{ width: "100%", height: "80vh" }}
          />
        </div>
        <div>
          <img
            src="https://plus.unsplash.com/premium_photo-1664303228218-c7eedbffe762?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3RhdGlvbmFyeXxlbnwwfHwwfHx8MA%3D%3D"
            alt="Banner 2"
            style={{ width: "100%", height: "80vh" }}
          />
        </div>
        <div>
          <img
            src="https://thegauntlet.ca/wp-content/uploads/2024/09/0E05955F-C191-4A02-8C3F-0F5137241495-1160x773.jpeg"
            alt="Banner 2"
            style={{ width: "100%", height: "80vh" }}
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
