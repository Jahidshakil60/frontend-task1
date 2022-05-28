import React from 'react'
import styled from 'styled-components'

function Home() {
  return (
    <HomeStyle>
        <div className='container-1'>
           <h2>Here will be a title</h2>
           <h5>Here will be a text</h5>
        </div>
          
        <div className='container-2'>
          <h4>Artwork for title 1</h4>
        </div>
    </HomeStyle>
  )
}

export default Home


const HomeStyle= styled.div`
margin: 6rem 3rem 0 3rem;
display: flex;
justify-content: space-between;


.container-1{
    display: flex;
    flex-direction: column;
    gap: 4rem;
}

.container-2{
    height: 14rem;
    width: 28rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #F2F2F2;
}

`;