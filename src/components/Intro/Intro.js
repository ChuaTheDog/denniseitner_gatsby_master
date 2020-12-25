import React from "react"
import styled from "styled-components"

const IntroStyles = styled.div`
  background-image: linear-gradient(
    225deg,
    rgba(82, 42, 201, 0.69) 0%,
    rgba(72, 37, 180, 1) 36%,
    #220f61 100%
  );
  height: 100vh;
  width: 100vw;
  padding: 15vw 2rem;
  display: grid;
  grid-template-columns: 33vw;
  h1 {
    font-family: Montserrat-Black;
    font-size: 50px;
    color: #ffffff;
    text-align: left;
    line-height: 60px;
    margin-bottom: 3rem;
    span {
      font-family: Pacifico;
    }
  }
`

const Intro = () => {
  return (
    <IntroStyles>
      <h1>
        My Name is <span className="yellow">Dennis</span> and I create digital
        experiances.
      </h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
        perferendis amet hic, culpa aut accusamus maxime quos assumenda totam
        perspiciatis fuga. Ab quia consequatur facere a nobis sequi ipsam
        recusandae?
      </p>
    </IntroStyles>
  )
}

export default Intro
