import React from "react";
import { CardTitle, CardText, Row, Col, Button, Card } from "reactstrap";
import "../App.css";
import { useNavigate } from "react-router-dom";


function Home() {
  const navigate = useNavigate();

  const nextPage = (page) => {
    navigate("/"+page);
  }

  return (
    <div>
        <Button onClick={()=>{nextPage("page01")}} color="primary">
            <h5>1.Basic Computing</h5>
        </Button><br/>
        <Button onClick={()=>{nextPage("page02")}} color="primary">
            <h5>2.Linear Equations</h5>
        </Button><br/>
        <Button onClick={()=>{nextPage("page03")}} color="primary">
            <h5>3.Interpolation	</h5>
        </Button><br/>
        <Button onClick={()=>{nextPage("page04")}} color="primary">
            <h5>4.Differentiation</h5>
        </Button><br/>
        <Button onClick={()=>{nextPage("page05")}} color="primary">
            <h5>5.Integration	</h5>
        </Button><br/>
        <Button onClick={()=>{nextPage("page06")}} color="primary">
            <h5>6.Root-finding</h5>
        </Button><br/>
        
    </div>
  );
}

export default Home;