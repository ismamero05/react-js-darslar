import styled from "styled-components";


const Container = styled.div`
    width: 100%;
    padding: 0 130px;
    box-sizing: border-box;
`

Container.Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    justify-content: center;
`

Container.Product = styled.div`
    height: 100px;
    display: flex;
    align-items: center;
    background: #FFFFFF;
    box-shadow: 10px 10px 100px rgba(0, 0, 0, 0.319);
    padding: 0 50px;
`

const ProductImg = styled.img`
    width: 100px;
`

const ProductTitle = styled.h3`
    margin-left: 50px;
`

const ProductPrice = styled.p`
    margin-left: 80px;
`
const ProductButtonmi = styled.button`
    margin-left: 50px;
    width: 20px;
    height: 20px;
    background: green;
    color: white;
    border: none;
    border-radius: 50%;
    outline: none;
`
const ProductButtonpl = styled.button`
    margin-left: 20px;
    width: 20px;
    height: 20px;
    background: green;
    color: white;
    border: none;
    border-radius: 50%;
    outline: none;
`

const ProductQua = styled.p`
    margin-left: 20px;
`

const TotalPr = styled.p`
    margin-left: 50px;
`

const DelIc = styled.img`
    margin-left: 20px;
` 


export {Container, ProductImg, ProductTitle, ProductPrice, ProductButtonmi, ProductButtonpl, ProductQua, TotalPr, DelIc}