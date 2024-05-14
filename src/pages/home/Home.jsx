import React from "react";
import { DefaultLayout } from "../../components/layout/DefaultLayout";
import { CustomCarousel } from "../../components/customCarousel/CustomCarousel";
import { Container, Row, Col, Form } from "react-bootstrap";
import { CustomCard } from "../../components/customCard/CustomCard";

const Home = () => {
  return (
    <DefaultLayout>
      <CustomCarousel />

      {/* book list  */}

      <Container>
        <Row>
          <Col className="d-flex justify-content-between mt-5">
            <label htmlFor="">20 books found!</label>
            <div>
              <Form.Control placeholder="search by book name .. " />
            </div>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <CustomCard />
          </Col>
        </Row>
      </Container>
    </DefaultLayout>
  );
};

export default Home;
