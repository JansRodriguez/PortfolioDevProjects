import {Button} from "react-bootstrap";
import { Card } from "react-bootstrap";

export default () => {
  return (
    <Card>
      <Card.Img variant="top" src="../public/_img/cardUm.jpg" />
      <Card.Body>
        <Card.Title>Feira Incrivel</Card.Title>
        <Card.Text>
          Todos os anos era realizada a Feira da Igreja Perseguida em São Luís/MA
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};
