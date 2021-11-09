import axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [blog, setBlog] = useState({ title: "", body: "", date: "2021" });
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3003/blogs").then((res) => {
      console.log(res.data);
      setBlogs(res.data);
    });
  }, []);

  //-----
  const handleAddClick = () => {
    setBlog({ title: title, body: body, date: "2021" });
    axios.post("http://localhost:3003/blogs", blog)
      .then((res) => {
      console.log(res.data);
      setBlogs(res.data);
    });
  };

  return (
    <div className="App">
      <Row className="justify-content-md-center">
        {blogs.map((blog) => (
          <Col xs lg="2">
            <Card>
              <Card.Body>
                <Card.Title>
                  {" "}
                  {blog.title} - {blog.date}
                </Card.Title>
                <Card.Text>{blog.body}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      {/* ------------------ */}
      <hr></hr>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Body</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            onChange={(e) => setBody(e.target.value)}
          />
          <Button variant="outline-primary" onClick={handleAddClick}>
            Add Post
          </Button>{" "}
        </Form.Group>
      </Form>
    </div>
  );
}

export default App;
