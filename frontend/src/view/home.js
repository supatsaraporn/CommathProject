import React from "react";
import { CardTitle, CardText, Row, Col, Button, Card } from "reactstrap";
import "../App.css";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function Home() {
  const navigate = useNavigate();

  const nextPage = (page) => {
    navigate("/"+page);
  }

  return (
    <div>
        
       <center> <Button onClick={()=>{nextPage("BasicComputing")}} color="btn btn-outline-success">
            <h5>1.Basic Computing</h5>
        </Button><br/><br/>
        <Button onClick={()=>{nextPage("LinearEquations")}} color="btn btn-outline-success">
            <h5>2.Linear Equations</h5>
        </Button><br/><br/>
        <Button onClick={()=>{nextPage("Interpolation")}} color="btn btn-outline-success">
            <h5>3.Interpolation	</h5>
        </Button><br/><br/>
        <Button onClick={()=>{nextPage("Differentiation")}} color="btn btn-outline-success">
            <h5>4.Differentiation</h5>
        </Button><br/><br/>
        <Button onClick={()=>{nextPage("Integration")}} color="btn btn-outline-success">
            <h5>5.Integration</h5>
        </Button><br/><br/>
        <Button onClick={()=>{nextPage("Rootfinding")}} color="btn btn-outline-success">
            <h5>6.Root-finding</h5>
        </Button><br/></center>
    </div>
  );
}

export default Home;