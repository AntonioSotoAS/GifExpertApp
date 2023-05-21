import { Card } from "react-bootstrap";


export const GifItem = ({title,url,id}) => {
  return (
    <Card>
    <Card.Img src={url} alt={title} />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text></Card.Text>
    </Card.Body>
  </Card>
  )
};

export default GifItem;
