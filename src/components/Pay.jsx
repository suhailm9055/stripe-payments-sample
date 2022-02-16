import React, { useEffect, useState } from "react";
import styled from "styled-components";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";


const KEY = "pk_test_51KTR06SENUThnzGerZL4w1Ra4k6qLk8642aL6PDiAEhZQuxBfz1QUOLzbafnoou1Srcc3JFr56Qj0ewZTymiDW4X00wWivneK9"
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to right, #adadad97, #2c2c2cd1),
    url("https://images.pexels.com/photos/5704412/pexels-photo-5704412.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      no-repeat;
  display: flex;

  background-size: cover;
  align-items: center;
  justify-content: center;
`;
const Button = styled.button`
  padding: 5px 15px;
  padding-top: 7px;
  font-size: 20px;
  letter-spacing: 1px;
  /* border-radius: 25px; */
  font-weight: 500;
  background: #008080;
  color: #fff;
  text-align: center;
  cursor: pointer;
  border-radius: 4px;
  border: 1px solid #006363;
  box-shadow: 2px 2px 5px 1px #11111153;
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.1);
    background: #06d6d6dc;
    color: #4d4d4de6;
    font-weight: bold;
  }
`;

function Pay() {
 const [stripeToken, setStripeToken] = useState(null)

  const onToken= (token)=>{
    setStripeToken(token)
  }

  useEffect(() => {
  const makeRequest = async ()=>{
try{
  let KEY = "pk_test_51KTR06SENUThnzGerZL4w1Ra4k6qLk8642aL6PDiAEhZQuxBfz1QUOLzbafnoou1Srcc3JFr56Qj0ewZTymiDW4X00wWivneK9"
const res = await axios.post("http://localhost:5000/api/checkout/payment",{
  tokenId:stripeToken.id,
  amount:2000,
  apiKey:{KEY}
})
console.log(res.data);
}catch(err){
  console.log(err);
}
    }
    stripeToken && makeRequest()
  
  }, [stripeToken])
  
  return (
    <>
      <Container>
        <StripeCheckout
          name="QataRing"
          image="/ringLogo.png"
          billingAddress
          shippingAddress
          description="your total is 300 QA"
          amount={20000}
          currency="QAR"
          token={onToken}
          stripeKey={KEY}
        >
          <Button>Pay Now</Button>
        </StripeCheckout>
      </Container>
    </>
  );
}

export default Pay;
