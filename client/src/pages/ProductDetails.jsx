import { Rating } from '@mui/material';
import React from 'react';
import styled from "styled-components";
import Button from "../components/Button";
import { FavoriteRounded } from '@mui/icons-material';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 99%;
    overflow-y: scroll;
`;

const Wrapper = styled.div`
    flex: 1;
    max-width: 1400px;
    display: flex;
    width: 100%;
    padding: 12px;
    gap: 32px;
    @media (max-width: 750px) {
        flex-direction: column;
        justify-content: center;
    }
`;

const ImageWrapper = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Image = styled.img`
    height: 600px;
    border-radius: 12px;
    @media (max-width: 750px) {
        height: 400px;
    }
`;

const Details = styled.div`
    display: flex;
    gap: 18px;
    flex-direction: column;
    padding: 4px 10px;
    flex: 1;
`;

const Title = styled.div`
    font-size: 28px;
    font-weight: 600;
    color: ${({theme}) => theme.text_primary};
`;

const Desc = styled.div`
    font-size: 16px;
    font-weight: 400;
    color: ${({theme}) => theme.text_primary};
`;

const Name = styled.div`
    font-size: 18px;
    font-weight: 400;
    color: ${({theme}) => theme.text_primary};
`;

const Price = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 22px;
    font-weight: 500;
    color: ${({theme}) => theme.text_primary};
`;

const Span = styled.div`
    font-size: 16px;
    font-weight: 500;
    color: ${({theme}) => theme.text_secondary + 60};
    text-decoration: line-through;
    text-decoration-color: ${({theme}) => theme.text_secondary + 50};
`;

const Percent = styled.div`
    font-size: 16px;
    font-weight: 500;
    color: green;
`;

const Sizes = styled.div`
    font-size: 18px;
    font-weight: 500;
    display: flex;
    flex-direction: column;
    gap: 12px;

`;
const Items = styled.div`
    display: flex;
    gap: 12px;
`;

const Item = styled.div`
    border: 1px solid ${({theme}) => theme.primary};
    font-size: 14px;
    width: 42px;
    height: 42px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    ${({selected, theme}) =>
        selected &&
        `
        background: ${theme.primary};
        color: white;
        `
    }
`;

const ButtonWrapper = styled.div`
    display: flex;
    gap: 16px;
    padding: 32px 0px;
`

function ProductDetails() {
  return (
    <Container>
        <Wrapper>
            {/* Image of product */}
            <ImageWrapper>
                <Image src="https://plus.unsplash.com/premium_photo-1690366910345-5807bf328585?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            </ImageWrapper>

            {/* Details of product */}
            <Details>
                <div>
                    <Title>Title</Title>
                    <Name>Title</Name>
                </div>
                <Rating value={3.5} />
                <Price>
                    $120 <Span>$200</Span><Percent>40% off</Percent>
                </Price>
                <Desc>Product description</Desc>
                <Sizes>
                    <Items>
                        <Item selected>S</Item>
                        <Item>L</Item>
                        <Item>Xl</Item>
                    </Items>
                </Sizes>

                <ButtonWrapper>
                    <Button text="Add to Cart" full outlined />
                    <Button text="Buy Now" full />
                    <Button
                        leftIcon={
                            <FavoriteRounded sx={{fontSize: "22px", color: "red"}} />         
                        }
                        full
                        outlined
                    />
                </ButtonWrapper>

                
            </Details>
        </Wrapper>
    </Container>
  )
}

export default ProductDetails