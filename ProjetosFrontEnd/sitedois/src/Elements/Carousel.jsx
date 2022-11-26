import { Carousel } from "react-bootstrap";

export default () => {
  return (
    <Carousel>
      <Carousel.Item interval={500}>
        <img
          className="d-block"
          src="../public/_img/carroselUm.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block"
          src="./public/_img/carroselDois.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>O melhor de todos os acampaUnderGround</h3>
          <p>Recife 2013</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
