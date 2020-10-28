import React, { useState } from "react";
import {Row,Col,Button,Card,Input} from "reactstrap";
import "../App.css";
import { getB2s } from "../functions/function";
import { useNavigate } from "react-router-dom";
import Breadcrumb from 'react-bootstrap/Breadcrumb';

function B2s() {

    const navigate = useNavigate();
    const nextPage = (page) => {
        navigate("/"+page);
      }
    
    const [bit2string, setBit2string] = useState("");
    const [result, setResult] = useState("");
    const generate = () => {
        getB2s(bit2string).then((res) => {
            setResult(res);
        });
    };

    return ( 
    
    <div class = "body" >

        <div>
          <Breadcrumb>
             <Breadcrumb.Item onClick={()=>{nextPage("/")}}>Home</Breadcrumb.Item>
             <Breadcrumb.Item active>บทที่ 1</Breadcrumb.Item>
             <Breadcrumb.Item onClick={()=>{nextPage("elimination")}}>บทที่ 2</Breadcrumb.Item>
             <Breadcrumb.Item onClick={()=>{nextPage("interpolation")}}>บทที่ 3</Breadcrumb.Item>
             <Breadcrumb.Item onClick={()=>{nextPage("differentiation")}}>บทที่ 4</Breadcrumb.Item>
             <Breadcrumb.Item onClick={()=>{nextPage("integration")}}>บทที่ 5</Breadcrumb.Item>
             <Breadcrumb.Item onClick={()=>{nextPage("root-finding")}}>บทที่ 6</Breadcrumb.Item> 
          </Breadcrumb>
        </div>
  
        <Row style = {{ marginTop: "5%" } } >
        <Col sm = "2" > </Col> <Col sm = "8" >
        <div >          
           <h2 style = {{ marginTop: "20px",align : "center"}} >บทที่1 Basic Computing </h2> 

        <Row >
        <Col sm = "2" > </Col> <Col sm = "8" >
        <Card style = {
            { marginTop: "10px",alignItems: "center" }
        } >
        <p style = {{ marginTop: "10px"}} >ตัวอย่าง: 01111000000001010000000000000000 </p> 
        <Input style = {
            {
                marginTop: "20px",
                marginBottom: "20px",
                width: 500,
            }
        }
        value = { bit2string }
        type = "text"
        name = "bit2string"
        id = "bit2string"
        onChange = {
            (e) => setBit2string(e.target.value)
        }
        /> <h4 > ผลลัพธ์: { result } </h4> <Row style = {
            { marginBottom: "30px"}
        } >
        <Col sm = "8" >
        <Button onClick = { generate }
        color = "dark" >
        <div style = {{ width: 300 }} >
        <h5 style = {{ marginTop: "10px" }} > คำนวณ </h5> 
        </div > 
        </Button> 
        </Col > 
        
         </Row> 
         </Card > 
         </Col> 
         <Col sm = "2" >
              </Col> 
         </Row > 
         </div> 
         </Col > 
         <Col sm = "2" > </Col> 
         </Row > 
         
    </div>
    );
}

export default B2s;