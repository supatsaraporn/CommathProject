import React, { useState } from "react";
import {Row,Col,Button,Card,Input} from "reactstrap";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { getDifferentiation } from "../functions/function";
import Breadcrumb from 'react-bootstrap/Breadcrumb';

function Differentiation() {
  const navigate = useNavigate();
  const nextPage = (page) => {
    navigate("/"+page);
  }
  const [h, seth] = useState(0.64);
  const [p, setp] = useState(2);

  const [result, setresult] = useState();



  const generate = () => {
    const data = {
      h:h,
      p:p
      
    };
    getDifferentiation(data).then((res) => {
       setresult(res)
    });
  };

  return (
    <div>

       <div>
          <Breadcrumb>
             <Breadcrumb.Item onClick={()=>{nextPage("/")}}>Home</Breadcrumb.Item>
             <Breadcrumb.Item onClick={()=>{nextPage("b2s")}}>บทที่ 1</Breadcrumb.Item>
             <Breadcrumb.Item onClick={()=>{nextPage("elimination")}}>บทที่ 2</Breadcrumb.Item>
             <Breadcrumb.Item onClick={()=>{nextPage("interpolation")}}>บทที่ 3</Breadcrumb.Item>
             <Breadcrumb.Item active>บทที่ 4</Breadcrumb.Item>
             <Breadcrumb.Item onClick={()=>{nextPage("integration")}}>บทที่ 5</Breadcrumb.Item>
             <Breadcrumb.Item onClick={()=>{nextPage("root-finding")}}>บทที่ 6</Breadcrumb.Item> 
          </Breadcrumb>
        </div>
      <Row style={{ marginTop: "5%" }}>
        <Col sm="4"></Col>
        <Col sm="4">
          <div className="text-center">
            <h2 style={{ marginTop: "20px" }}>
              บทที่4 Differentiation
            </h2>
          </div>

          <Card style={{ marginTop: "10px",alignItems: "center" }}>
            <Row style={{ marginTop: "10px" }}>
              <Col></Col>
            </Row>
            <p>ตัวอย่าง: h = 0.64  และ p = 2</p>

            <Row>
              <div className="text-center">
                <Row>
                  <h3 style={{ marginTop: "20px", marginRight: "20px" }}>h:</h3>
                  <Input
                    style={{
                      marginTop: "20px",
                      marginBottom: "20px",
                      width: 100,
                    }}
                    value={h}
                    onChange={(e) => seth(e.target.value)}
                    type="text"
                    name="bit2string"
                    id="bit2string"
                  />
                </Row>
                <Row>
                  <h3 style={{ marginTop: "20px", marginRight: "20px" }}>p:</h3>
                  <Input
                    style={{
                      marginTop: "20px",
                      marginBottom: "20px",
                      width: 100,
                    }}
                    value={p}
                    onChange={(e) => setp(e.target.value)}
                    type="text"
                    name="bit2string"
                    id="bit2string"
                  />
                </Row>
              </div>
            </Row>
            <h4 style={{ marginBottom: "10px" }}>ผลลัพธ์: {result}</h4>

            <Row style={{ marginBottom: "30px" }}>
              <Col sm="8">
                <Button onClick={generate} color="dark">
                  <div style={{ width: 300 }}>
                    <h5 style={{ marginTop: "10px" }}>คำนวณ</h5>
                  </div>
                </Button>
              </Col>
            </Row>
          </Card>
        </Col>

        <Col sm="4"></Col>
      </Row>
    </div>
  );
}
export default Differentiation;
