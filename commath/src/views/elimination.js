import React, { useState } from "react";
import {Row,Col,Button,Card,Input} from "reactstrap";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { getElimination } from "../functions/function";
import Breadcrumb from 'react-bootstrap/Breadcrumb';

function Elimination() {

  const navigate = useNavigate();
  const nextPage = (page) => {
    navigate("/"+page);
  }
  const [a00, seta00] = useState(6);
  const [a01, seta01] = useState(-4);
  const [a02, seta02] = useState(1);
  const [a10, seta10] = useState(-4);
  const [a11, seta11] = useState(6);
  const [a12, seta12] = useState(-4);
  const [a20, seta20] = useState(1);
  const [a21, seta21] = useState(-4);
  const [a22, seta22] = useState(6);

  const [b1, setb1] = useState(-14);
  const [b2, setb2] = useState(36);
  const [b3, setb3] = useState(6);

  const [x0, setx0] = useState();
  const [x1, setx1] = useState();
  const [x2, setx2] = useState();


  const generate = () => {
    const data = {
      A:[[a00,a01,a02],[a10,a11,a12],[a20,a21,a22]],
      b:[b1,b2,b3]
      
    };
    getElimination(data).then((res) => {
      setx0(res[0])
      setx1(res[1])
      setx2(res[2])
    });
  };

  return (
    <div>
        <div>
          <Breadcrumb>
             <Breadcrumb.Item onClick={()=>{nextPage("/")}}>Home</Breadcrumb.Item>
             <Breadcrumb.Item onClick={()=>{nextPage("b2s")}}>บทที่ 1</Breadcrumb.Item>
             <Breadcrumb.Item active>บทที่ 2</Breadcrumb.Item>
             <Breadcrumb.Item onClick={()=>{nextPage("interpolation")}}>บทที่ 3</Breadcrumb.Item>
             <Breadcrumb.Item onClick={()=>{nextPage("differentiation")}}>บทที่ 4</Breadcrumb.Item>
             <Breadcrumb.Item onClick={()=>{nextPage("integration")}}>บทที่ 5</Breadcrumb.Item>
             <Breadcrumb.Item onClick={()=>{nextPage("root-finding")}}>บทที่ 6</Breadcrumb.Item> 
          </Breadcrumb>
        </div>

      <Row style={{ marginTop: "2%" }}>
        <Col sm="4"></Col>
        <Col sm="4">
        <div className="text">
           <h2  align= "center">บทที่2 Linear Equations</h2>
        </div>
          <Card style={{ marginTop: "10px", marginRight: "0px",alignItems: "center",backgroundColor: "" }}>
            <p style = {{ marginTop: "10px"}}>ตัวอย่าง:
               A : [ 6, -4 , 1] ,[-4 , 6 , -4] ,[1 , -4 , 6] 
               B : [-14 , 36 , 6]</p>
            <Row>
              <div className="text-center">
                <h3 style={{marginTop:10}}>A</h3>
                <Row>
                  <Input
                    style={{
                      marginTop: "20px",
                      marginBottom: "20px",
                      width:60,
                    }}
                    value={a00}
                    type="text"
                    name="bit2string"
                    id="bit2string"
                    onChange={(e) => seta00(e.target.value)}
                  />
                  <Input
                    style={{
                      marginLeft: "20px",
                      marginTop: "20px",
                      marginBottom: "20px",
                      width: 60,
                    }}
                    value={a01}
                    type="text"
                    name="bit2string"
                    id="bit2string"
                    onChange={(e) => seta01(e.target.value)}
                  />
                  <Input
                    style={{
                      marginLeft: "20px",
                      marginTop: "20px",
                      marginBottom: "20px",
                      width:60,
                    }}
                    value={a02}
                    type="text"
                    name="bit2string"
                    id="bit2string"
                    onChange={(e) => seta02(e.target.value)}
                  />
                </Row>

                <Row>
                  <Input
                    style={{
                      marginTop: "20px",
                      marginBottom: "20px",
                      width:60,
                    }}
                    value={a10}
                    type="text"
                    name="bit2string"
                    id="bit2string"
                    onChange={(e) => seta10(e.target.value)}
                  />
                  <Input
                    style={{
                      marginLeft: "20px",
                      marginTop: "20px",
                      marginBottom: "20px",
                      width:60,
                    }}
                    value={a11}
                    type="text"
                    name="bit2string"
                    id="bit2string"
                    onChange={(e) => seta11(e.target.value)}
                  />
                  <Input
                    style={{
                      marginLeft: "20px",
                      marginTop: "20px",
                      marginBottom: "20px",
                      width:60,
                    }}
                    value={a12}
                    type="text"
                    name="bit2string"
                    id="bit2string"
                    onChange={(e) => seta12(e.target.value)}
                  />
                </Row>

                <Row>
                  <Input
                    style={{
                      marginTop: "20px",
                      marginBottom: "20px",
                      width:60,
                    }}
                    value={a20}
                    type="text"
                    name="bit2string"
                    id="bit2string"
                    onChange={(e) => seta20(e.target.value)}
                  />
                  <Input
                    style={{
                      marginLeft: "20px",
                      marginTop: "20px",
                      marginBottom: "20px",
                      width:60,
                    }}
                    value={a21}
                    type="text"
                    name="bit2string"
                    id="bit2string"
                    onChange={(e) => seta21(e.target.value)}
                  />
                  <Input
                    style={{
                      marginLeft: "20px",
                      marginTop: "20px",
                      marginBottom: "20px",
                      width:60,
                    }}
                    value={a22}
                    type="text"
                    name="bit2string"
                    id="bit2string"
                    onChange={(e) => seta22(e.target.value)}
                  />
                </Row>
              </div>

              <div className="text-center" style={{ marginLeft: "100px" }}>
              <h3 style={{marginTop:10}}>B</h3>
                <Row>
                  <Input
                    style={{
                      marginLeft: "20px",
                      marginTop: "20px",
                      marginBottom: "20px",
                      width:60,
                    }}
                    value={b1}
                    type="text"
                    name="bit2string"
                    id="bit2string"
                    onChange={(e) => setb1(e.target.value)}
                  />
                </Row>
                <Row>
                  <Input
                    style={{
                      marginLeft: "20px",
                      marginTop: "20px",
                      marginBottom: "20px",
                      width:60,
                    }}
                    value={b2}
                    type="text"
                    name="bit2string"
                    id="bit2string"
                    onChange={(e) => setb2(e.target.value)}
                  />
                </Row>
                <Row>
                  <Input
                    style={{
                      marginLeft: "20px",
                      marginTop: "20px",
                      marginBottom: "20px",
                      width:60,
                    }}
                    value={b3}
                    type="text"
                    name="bit2string"
                    id="bit2string"
                    onChange={(e) => setb3(e.target.value)}
                  />
                </Row>
              </div>
            </Row>
            <Row style={{ marginBottom: "50px" }}>
              <Col sm="8">
                <Button onClick={generate} color="dark">
                  <div style={{ width: 300 }}>
                    <h5 style={{ marginTop: "5px" }}>คำนวณ</h5>
                  </div>
                </Button>
              </Col>
            </Row>
          </Card>
          <div><center>
          
              <h4 style={{ marginTop: "10px", marginLeft: "10px" }} >ผลลัพธ์:</h4>
              <Button color="dark">
                  <div style={{ width: 300 }}>
                    <h5 style={{ marginTop: "5px" }}>x0 =  {x0}</h5>
                  </div>
              </Button>
              <Button color="dark">
                  <div style={{ width: 300 }}>
                    <h5 style={{ marginTop: "5px" }}>x1 = {x1}</h5>
                  </div>
              </Button>
              <Button color="dark">
                  <div style={{ width: 300 }}>
                    <h5 style={{ marginTop: "5px" }}>x2 =  {x2}</h5>
                  </div>
              </Button></center>
        
        </div>
        </Col>
        <Col sm="4"></Col>
      </Row>
      
    </div>
  );
}
export default Elimination;
