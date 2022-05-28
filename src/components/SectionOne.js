import React from 'react'
import styled from 'styled-components'
import megaphone from '../img/megaphone.svg'
import telegram from '../img/telegram.svg'
import radio from '../img/radio.svg'

function SectionOne() {
  return (
    <SectionStyle>
        <div className='container-1'>
          <div className='border'></div>
            <div className='text'>
              <h2> AVAILABLE FOR EVERYONE </h2>
              <h4>Here will be a text</h4>
            </div>
            <div  className='border-1'></div>
        </div>

        <div className='container-2'>
             <div className='img-container'>
                <img className='img1' src={megaphone} alt="" />
             </div>

             <div className='img-container'>
                <img  className='img1' src={telegram} alt="" />
             </div>

             <div className='img-container'>
                <img  className='img1' src={radio} alt="" />
             </div>
           
        </div>

        <div className='text-container'>
            <p>Text 1</p>
            <p>Text 2</p>
            <p>Text 3</p>
        </div>

        <div className='btn-container'>
            <button>Hello 1</button>
            <button>Hello 2</button>
            <button>Hello 3</button>
        </div>
    </SectionStyle>
  )
}

export default SectionOne


const SectionStyle= styled.div`

  margin-top: 8rem;

  .container-1{
     display: flex;

    .border{
     border-bottom: 1px dotted;
     width: 38rem;
     height: 2rem;
     /* position: relative; */
     
    }
    h2{
          width: 18rem;
        color: #644F9C;

    }
    .text{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: end;
      font-weight: 500;
      margin-left: 4rem;
      
  }

    .border-1{
        border-bottom: 1px dotted;
        width: 38rem;
        height: 2rem;
        margin-left: 2rem;

    }

  }

  .container-2{
      margin-top: 8rem;
      display: flex;
      gap: 5rem;
      justify-content: center;
  }


  .img-container{
      width: 8rem;
      height: 8rem;
      box-shadow: 5px 10px 18px #e7e5e5;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
  }


  .img1{
      width: 3rem;
      color: #644F9C;
  }

  

  .text-container{
      display: flex;
      justify-content: center;
      font-weight: 500;
      gap: 10rem;
    
  }


   .btn-container{
    display: flex;
    justify-content: center;
    gap: 4rem;

      button{
          height: 1.8rem;
          width: 9rem;
          color: white;
          background: #644F9C;
          border: none;
          border-radius: 13px;
      }

   }

 

 

  



`;