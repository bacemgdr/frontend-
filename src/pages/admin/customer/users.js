import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const Users = ({ user }) => {
  const { id, name, email } = user;
  return (
    <Card>
      <Row>
        <Col>
          <h5>{name}</h5>
        </Col>
        <Col>
          <p>{email}</p>
        </Col>
        <Col>
          <Link to={`/user/${id}`}>
            <button>profile</button>
          </Link>
        </Col>
      </Row>
    </Card>
  )
};
export default Users;
