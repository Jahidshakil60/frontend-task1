
import React from 'react'
import styled from 'styled-components'

function TitleOne() {
  return (
    <TitleOneStyle>
        <div className="title">
            <h3>Title 1</h3>
        </div>
        <div className="container">
            <div className="container1">
                <h1>1 BN+</h1>
                <h3>Daily Impressions</h3>
            </div>
            <div className="container2">
                <h1>$ 500k+</h1>
                <h3>Paid</h3>
            </div>
            <div className="container3">
               <h1> 8k+</h1>
                <h3>Global Publishers</h3>
            </div>
        </div>

    </TitleOneStyle>
  )
}

export default TitleOne

const TitleOneStyle = styled.div`
    
    margin-top: 8rem;
    background:  #644F9C;
    height: 70vh;
   

   .title{
       display: flex;
       justify-content: center;
       color: white;

   }

   .container{
      display: flex;
      justify-content: space-around;
      margin-top: 2.5rem;

     .container1{
         height: 16rem;
         width: 16rem;
         border: 2px dotted white;
         border-radius: 50%;
         display: flex;
         flex-direction: column;
         justify-content: center;
         align-items: center;
         color: white;
         

     }

     .container2{
         height: 16rem;
         width: 16rem;
         border: none;
         background-color: white;
         border-radius: 50%;
         display: flex;
         flex-direction: column;
         justify-content: center;
         align-items: center;
         color: #644F9C;
     }

     .container3{
        height: 16rem;
         width: 16rem;
         border: none;
         background: #FF6F00;
         border-radius: 50%;
         display: flex;
         flex-direction: column;
         justify-content: center;
         align-items: center;
         color: white;

     }

   }

`;