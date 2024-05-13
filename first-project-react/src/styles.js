import styled from "styled-components"
import background from "./Assets/background1.svg"

export const Container = styled.div`
background: url("${background}");
background-size: cover;

display: flex;
flex-direction: column;
align-items: center;
gap: 40px;
height: 100vh;
`

export const ContainerItens = styled.div`
background: linear-gradient(
    157.44deg, 
    rgba(255, 255, 255, 0.6) 0.84%, 
    rgba(255, 255, 255, 0.6) 0.85%, 
    rgba(255, 255, 255, 0.15) 100%);

border-radius: 61px 61px 0px 0px;

padding: 50px 36px;

display: flex;
flex-direction: column;
height: 100vh;
`

export const Image = styled.img`
margin-top: 30px;
`

export const H1 = styled.h1`
font-family: Roboto;
font-style: normal;
font-size: 34px;
font-weight: 700;
line-height: 39.84px;
text-align: center;
color: rgba(255, 255, 255, 1);
margin-bottom: 80px;
`

export const P = styled.p`
font-family: Roboto;
font-size: 18px;
font-weight: 700;
line-height: 22px;
letter-spacing: -0.408px;
text-align: left;
color: rgba(238, 238, 238, 1);
margin-left: 25px;

`

export const Button = styled.button`
width: 342px;
height: 74px;
border-radius: 14px;
background: rgba(0, 0, 0, 0.8);
border: none;
font-family: Roboto;
font-size: 17px;
font-weight: 700;
line-height: 28px;
color: rgba(255, 255, 255, 1);
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
gap: 20px;

&:hover{
    opacity: 0.8;
}

&:active{
    opacity: 0.5;
}
`

export const Input = styled.input`
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
background: rgba(255, 255, 255, 0.25);
width: 342px;
height: 58px;
padding: 15px 20px 15px 25px;
border-radius: 14px;
border: none;
outline: none;
font-family: Roboto;
font-size: 20px;
font-weight: 400;
line-height: 28.13px;
text-align: left;
color: rgba(255, 255, 255, 1);
margin-bottom: 34px;
`

export const Users = styled.li`
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
background: rgba(255, 255, 255, 0.25);
width: 342px;
height: 58px;
padding: 15px 20px 15px 25px;
border-radius: 14px;
border: none;
outline: none;
margin-top: 20px;

display: flex;
    justify-content: space-around;
    align-items: center;
    
p{
font-family: Roboto;
font-size: 20px;
font-weight: 400;
line-height: 28.13px;
text-align: left;
color: rgba(255, 255, 255, 1);
    }

button{
background: none;
border: none;
cursor: pointer;
:hover{
    opacity: 0.8;
}
:active{
    opacity: 0.5;
}
    }
`