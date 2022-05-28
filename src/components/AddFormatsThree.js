import React from 'react'
import styled from 'styled-components'
import open from '../img/open.svg'

function AddFormatsThree() {
  return (
    <AddformatesStyle>
    <div className='container-1'>
     <div className='border'></div>
       <div className='text'>
         <h2> VERSATILE AD FORMATS </h2>
        
       </div>
       <div  className='border-1'></div>
   </div>

   <div className='btn-container'>
       <button className='btn '>POP-UNDER</button>
       <button className='btn '>BANNER AD</button>
       <button className='btn btn-3'>NATIVE</button>
       <button className='btn '>SKIM</button>
   </div>

   <div className='img-container'>
       <div className="img">
             <h4>Ad Format</h4>

             <p>Explanation graphics of ad format</p>
       </div>

       <div className='text'>
            <h4>NATIVE</h4>
            <p>Ad format with the image and the title, that perfectly fits into
               the content of the site.
               Native ads are placed in the most visible areas of the page
               and, thus, this format shows good results and the level of
               interaction.</p>

           <div className="learn">
             <p>Learn more</p>
             <img src={open} alt="" />
           </div>
       </div>
   </div>


</AddformatesStyle>
)
}

export default AddFormatsThree


const AddformatesStyle = styled.div`
margin-top: 8rem;

.container-1{
display: flex;

.border{
border-bottom: 1px dotted;
width: 38rem;
height: 2rem;


}
h2{
   width: 18rem;
 color: #644F9C;

}
.text{
display: flex;
align-items: center;
justify-content: end;
margin-left: 4rem;

}

.border-1{
 border-bottom: 1px dotted;
 width: 38rem;
 height: 2rem;
 margin-left: 2rem;

}
}

.btn-container{
 display: flex;
 justify-content: space-around;

 .btn{
     height: 2rem;
     width: 12rem;
     background:  rgb(255, 255, 255);
     border: none;
     box-shadow: 5px 10px 18px #888888;
     border-radius: 13px;
     cursor: pointer;
 }
 .btn-3{
     background: #FF6F00 ;
     color: white;
 }
}


.img-container{
   margin: 4rem 0 0 4rem;
   display: flex;
   gap: 5rem;
   .img{
       height: 14rem;
       width: 28rem;
       display: flex;
       flex-direction: column;
       justify-content: center;
       align-items: center;
       background: #644F9C;
       color: white;
   }

   .text{
       width: 35rem;

       h4{
           color: #FF6F00;
       }

   }

   .learn{
       display: flex;
       gap: 0.6rem;
       margin-top: 4.5rem;
       p{
           font-size: 0.9rem;
           cursor: pointer;
           color: #644F9C;
           font-weight: 500;
       }
       img{
           width: 0.8rem;
           cursor: pointer;
       }
   }
}


`;