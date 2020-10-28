import React from "react";
import { CardTitle, CardText, Row, Col, Button, Card } from "reactstrap";
import Image from 'react-bootstrap/Image';
import Breadcrumb from 'react-bootstrap/Breadcrumb';




import "../App.css";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";



function Main() {
  const navigate = useNavigate();

  const nextPage = (page) => {
    navigate("/"+page);
  }

  return (
    
    <div style={{backgroundColor: "black"}}>
      <div>
        <Image src="https://scontent.fubp1-1.fna.fbcdn.net/v/t1.0-9/122870484_111443094095166_2380998792652038896_o.jpg?_nc_cat=106&ccb=2&_nc_sid=e007fa&_nc_ohc=3YW5zhB1vBYAX-Qlmdy&_nc_ht=scontent.fubp1-1.fna&oh=a8129d8ccfd1939d16210d772f454fa6&oe=5FBF5311" width="1500px" height="230px"/>
        <div>
          <Breadcrumb>
             <Breadcrumb.Item active>Home</Breadcrumb.Item>
             <Breadcrumb.Item onClick={()=>{nextPage("b2s")}}>บทที่ 1</Breadcrumb.Item>
             <Breadcrumb.Item onClick={()=>{nextPage("elimination")}}>บทที่ 2</Breadcrumb.Item>
             <Breadcrumb.Item onClick={()=>{nextPage("interpolation")}}>บทที่ 3</Breadcrumb.Item>
             <Breadcrumb.Item onClick={()=>{nextPage("differentiation")}}>บทที่ 4</Breadcrumb.Item>
             <Breadcrumb.Item onClick={()=>{nextPage("integration")}}>บทที่ 5</Breadcrumb.Item>
             <Breadcrumb.Item onClick={()=>{nextPage("root-finding")}}>บทที่ 6</Breadcrumb.Item> 
          </Breadcrumb>
        </div>

      </div>

      <Row style={{ marginTop: "1%" }}>
        <Col sm="3"></Col>

        <Col sm="6">
          <div className="text-center">
            <Row>
              <Col sm="4">
                <Card style={{backgroundColor: "white"}}>
                  <CardTitle>
                    <h3 style={{ marginTop: "10px"}}><u>บทที่ 1</u></h3>
                  </CardTitle>
                  <CardText>
                    <h5>Basic Computing</h5>
                  </CardText>
                    <Button onClick={()=>{nextPage("b2s")}} color="dark">
                      <h6 style={{ marginTop: "10px" }}>เลือก</h6>
                    </Button>
                </Card>
              </Col>
              <Col sm="4">
                <Card style={{backgroundColor: "white"}}>
                  <CardTitle>
                    <h3 style={{ marginTop: "10px" }}><u>บทที่ 2</u></h3>
                  </CardTitle>
                  <CardText>
                    <h5>Linear Equations</h5>
                  </CardText>
                  <Button onClick={()=>{nextPage("elimination")}} color="dark">
                    <h6 style={{ marginTop: "10px" }}>เลือก</h6>
                  </Button>
                </Card>
              </Col>
              <Col sm="4">
                <Card style={{backgroundColor: "white"}}>
                  <CardTitle>
                    <h3 style={{ marginTop: "10px" }}><u>บทที่ 3</u></h3>
                  </CardTitle>
                  <CardText>
                    <h5>Interpolation</h5>
                  </CardText>
                  <Button onClick={()=>{nextPage("interpolation")}} color="dark">
                    <h6 style={{ marginTop: "10px" }}>เลือก</h6>
                  </Button>
                </Card>
              </Col>
            </Row>

            <Row className="text-center" style={{ marginTop: "30px" }}>
                   <Col sm="12">
                     <Card style={{backgroundColor: "white"}}>
                       <CardTitle>
                         <h3 style={{ marginTop: "10px" }}><u>บทที่ 4</u> : Differentiation</h3>
                       </CardTitle>
                       <Button onClick={()=>{nextPage("differentiation")}} color="dark">
                         <h6 style={{ marginTop: "10px" }}>เลือก</h6>
                       </Button>

                     </Card>
                  </Col>
             </Row>

            <Row className="text-center" style={{ marginTop: "30px" }}>
              <Col sm="6">
                <Card style={{backgroundColor: "white"}}>
                  <CardTitle>
                    <h3 style={{ marginTop: "10px" }}><u>บทที่ 5</u></h3>
                  </CardTitle>
                  <CardText>
                    <h5>Integration</h5>
                  </CardText>
                  <Button onClick={()=>{nextPage("integration")}} color="dark">
                    <h6 style={{ marginTop: "10px" }}>เลือก</h6>
                  </Button>
                </Card>
              </Col>

              <Col sm="6">
                <Card style={{backgroundColor: "white"}}>
                  <CardTitle>
                    <h3 style={{ marginTop: "10px" }}><u>บทที่ 6</u></h3>
                  </CardTitle>
                  <CardText>
                    <h5>Root-finding</h5>
                  </CardText>
                  <Button onClick={()=>{nextPage("root-finding")}} color="dark">
                    <h6 style={{ marginTop: "10px" }}>เลือก</h6>
                  </Button>
                </Card>
              </Col>
            </Row>
          </div>
        </Col>
        <Col sm="3"></Col>
      </Row>
    </div>
  );
}

export default Main;
