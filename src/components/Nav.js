import React from 'react'
import styled from 'styled-components';

function Nav() {
  return (
    <StyledNav>
        <div className='logo-container'>
        <h1 className='logo'>Logo</h1>

        <p> <span>BN</span> / EN</p>

        </div>

        <div className='menu-container'>

          <ul>
            <li><a className='list list-1'>HOME</a></li>
            <li><a className='list'>ADVERTISERS</a></li>
            <li><a className='list'>PUBLISHERS</a></li>
            <li><a className='list'>INFLUENCERS</a></li>
            <li><a className='list'>AD FORMATS</a></li>
            <li><a className='list'>BLOG</a></li>
            <li><a className='list'>CONTACT US</a></li>
   
          </ul>

          <div className='btn-container'>
              <botton className='btn '>LOGIN</botton>
              <button className='btn  btn-2 '>SIGN UP</button>
          </div>

        </div>
    
    
   </StyledNav>
  )
}

export default Nav


const StyledNav= styled.nav`
  min-height: 3vh;
  background: #F2F2F2;
  padding: 1rem 3rem;

  .logo-container{
    height: 3rem;
    display: flex;
    justify-content: space-between;

    .logo{
      font-size: 1.5rem;
      font-family: 'PT Sans', sans-serif;
      font-weight: 700;
  }

    p{
        font-size: small;
        font-weight: 600;
    }
    span{
        color: rgb(50,205,50);
    }

  }


  .menu-container{

    display: flex;
    justify-content: space-between;
    font-family: 'PT Sans', sans-serif;
    font-weight: 500;


    ul{
      
      width: 55rem;
      display: flex;
      list-style: none;
      justify-content: space-between;

     

      li{
        cursor: pointer;

        .list{
        font-size: 0.8rem;
        color: #644F9C;
        text-decoration: none;

       }
       .list-1{
         color: #FF6F00;
       }

      }

      
     }
    }

    .btn-container{

        height: 2.5rem;
        width: 9.5rem;
        background: white;
        box-shadow: 5px 10px 18px #888888;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0rem 1.2rem;
        border-radius: 20px;
        

        .btn{
            font-size: 0.7rem;
            cursor: pointer;
        }
        .btn-2{
            height: 1.8rem;
            width: 5rem;
            border: none ;
            background: #FF6F00;
            border-radius: 12px;
            box-shadow: 5px 10px 18px #888888;
        }
        
    }


  

  
 
`;
