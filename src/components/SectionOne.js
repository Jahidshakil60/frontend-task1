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

        <div>
            <p>text 1</p>
            <p>text 2</p>
            <p>text 3</p>
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
     border-top: 1px dotted;
     width: 30rem;
     position: relative;
     
    }
    h2{

        position: absolute;
        top: 90vh;
        left: 33.5rem;
        color: #644F9C;

    }
    h4{
        margin-left: 6rem;
    }

    .border-1{
        border-top: 1px dotted;
        width: 31rem;
        margin-left: 9rem;

    }

  }

  .container-2{
      margin-top: 8rem;
      display: flex;
      gap: 2rem;
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


 

 

  



`;