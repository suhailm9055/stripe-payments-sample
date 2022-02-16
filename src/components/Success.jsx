import React from "react";
import styled from "styled-components"


const Container= styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to right, #adadad97, #2c2c2cd1),
    url("https://images.pexels.com/photos/5704412/pexels-photo-5704412.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      no-repeat;
  display: flex;
  
  background-size:cover;
  align-items: center;
  justify-content: center;
`
const ButtonContaner=styled.div`
padding: 10px 15px;
padding-top: 15px;
font-size: 20px;
letter-spacing: 1px;
width:40%;
height:20%;
/* border-radius: 25px; */
font-weight: 600;
background: #fff;
color: #008080;
text-align: center;
cursor: pointer;
border-radius:4px;
border: 1px solid #006363;
box-shadow: 0px 0px 100px 10px #53ffff;

`
const P=styled.h6``
function Success() {
  return (
    <>
    <Container>

    <ButtonContaner>
      Payment Successful
      <P>Your order placed successfully,Thanks for choosing us</P>
    </ButtonContaner>
    </Container>
    </>
  );
}

export default Success;
