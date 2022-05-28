import React from 'react'
import styled from 'styled-components'
import left from '../img/left.svg'
import right from '../img/right.svg'

function Title() {
  return (
    <TitleStyle>
       <div className="title">
           <h3>Title 1</h3>
           <div className="btn">
              <button className=' btn-1'></button>
               <button className='btns '></button>
               <button className='btns '></button>
              <button className='btns '></button>
           </div>
          
       </div>
       <div className="container">
           <div className="container1">
              <div className="border">
                  <div className="img">

                  </div>
                  <div className="text">
                     <h5>Title 1</h5>
                     <h4>Here will be a text</h4>
                  </div>
              </div>
           </div>
           <div className="container1">
           <div className="border">
                  <div className="img">

                  </div>
                  <div className="text">
                     <h5>Title 1</h5>
                     <h4>Here will be another text</h4>
                  </div>
              </div>
           </div>
       </div>

       <div className="b-btn">
           <div className="btn">
              <img src={left} alt="" />
           </div>
           <div className="btn">
              <img src={right} alt="" />
           </div>
       </div>

    </TitleStyle>
  )
}

export default Title

const TitleStyle=styled.div`
   margin-top: 8rem;
   height: 70vh;
   scroll-behavior: smooth;

  .title{

    display: flex;
    flex-direction: column;
    align-items: center;


    .btn{
      display: flex;
     gap: .5rem;
      
      .btn-1{
         height: 0.3rem;
         width: 1.3rem;
         background:#644F9C ;
         border: none;
        border-radius: 5px;

      }
      
      .btns{
        height: 0.3rem;
        width: 0.5rem;
        background: #999;
        border: none;
        border-radius: 5px;
     }
    }
    

}

.container{
    margin: 4rem 0  0 0;
    display: flex;
    

    .container1{
        height: 12rem;
        width: 30rem;
        box-shadow: 5px 10px 18px #888888;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 15rem;
        padding: 0 1rem;
        color: #644F9C;

        .border{
            height: 10.5rem;
            width: 28rem;
            border: 1px dotted #FF6F00;
            border-radius: 10PX;
            display: flex;
            align-items: center;
            gap: 3rem;


            .img{
                height: 8rem;
                width: 8rem;
                background: #a1a1a1;
                margin-left: 1.5rem;

            }

        }
    }
/* 
    .container2{
        height: 12rem;
        width: 30rem;
        box-shadow: 5px 10px 18px #888888;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 10rem;
    } */
}

.b-btn{
  display: flex;
  justify-content: center;
  gap: 3.5rem;
  margin: 4rem 0 4rem 0;

      img{
          height: 2rem;
          width: 2rem;
      }

    .btn {
        height: 3rem;
        width: 3rem;
        box-shadow: 5px 10px 18px #888888;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;


    }
}




`;