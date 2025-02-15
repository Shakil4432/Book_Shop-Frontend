import { Carousel } from "antd";

const Banner = () => {
  return (
    <div>
      <Carousel autoplay>
        <div>
          <img
            src="https://img.freepik.com/free-photo/pile-paperback-books-table_93675-129054.jpg?t=st=1738313671~exp=1738317271~hmac=178b0f2c79d931a78d456d6116aa4f36a638446a53a1619e482df61a16f4bf19&w=826"
            alt="Banner 1"
            style={{ width: "100%", height: "80vh" }}
          />
        </div>
        <div>
          <img
            src="https://img.freepik.com/free-photo/3d-view-books_23-2150473308.jpg?t=st=1738313355~exp=1738316955~hmac=cbae91d0d09b7c05e9fa22f4b9fef0545707265834bb7401837e8cb35ac6d447&w=900"
            alt="Banner 2"
            style={{ width: "100%", height: "80vh" }}
          />
        </div>
        <div>
          <img
            src="https://img.freepik.com/free-photo/3d-view-books_23-2150473309.jpg?t=st=1738313797~exp=1738317397~hmac=c42f922433d362c1893a5ed74ab95419b69c2f70ad767928764412cb1499dfb1&w=900"
            alt="Banner 2"
            style={{ width: "100%", height: "80vh" }}
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
