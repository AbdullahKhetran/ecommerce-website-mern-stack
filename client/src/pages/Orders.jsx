import React from 'react'
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { getOrders } from "../api";
import { CircularProgress } from '@mui/material';

const Container = styled.div`
  padding: 20px 30px;
  padding-bottom: 200px;
  height: 100%;
  overflow-y: scroll;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  @media (max-width: 768px) {
    padding: 20px 12px;
  }
  background: ${({theme}) => theme.bg};
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: 500;
  display: flex;
  justify-content: ${({center}) => (center ? "center" : "space-between")};
  align-items: center;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
  @media (max-width: 750px) {
    gap: 14px;
  }
`

const OrderCard = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 16px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  }
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const OrderId = styled.div`
  font-weight: bold;
`;

const Status = styled.div`
  font-size: 12px;
  padding: 4px 10px;
  border-radius: 20px;
  background-color: ${({ status }) => {
    switch (status) {
      case "Pending": return "#ffe0b2";
      case "Shipped": return "#bbdefb";
      case "Delivered": return "#c8e6c9";
      case "Cancelled": return "#ffcdd2";
      default: return "#eee";
    }
  }};
`;

const DateText = styled.div`
  font-size: 12px;
  color: gray;
  margin: 6px 0;
`;

const Items = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 10px;
`;

const Item = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 8px;
`;

const ItemInfo = styled.div``;

const Name = styled.div`
  font-size: 14px;
`;

const Qty = styled.div`
  font-size: 12px;
  color: gray;
`;

const More = styled.div`
  font-size: 12px;
  color: gray;
`;

const Total = styled.div`
  margin-top: auto;
  font-weight: bold;
  text-align: right;
`;

const Message = styled.div`
  padding: 40px;
  text-align: center;
`;

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  


  useEffect(() => {  
    const fetchOrders = async () => {
      // console.log("in fetchorder function")
      try {
        // console.log("in fetchorder try block")
        const token = localStorage.getItem("krist-app-token")
        const res = await getOrders(token);
        // console.log("res.data", res.data)
        setOrders(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders()
  }, [])


  // console.log("fetchedOrders", fetchedOrders)

  if (loading) return  <CircularProgress sx={{fontSize: "20px"}} />
  ;

  if (orders.length === 0)
    return <Message>No orders yet</Message>;

  return (
    <Container>
      <Title>Your Orders</Title>

      <CardWrapper>
        {orders.map((order) => (
          <OrderCard
            key={order._id}
            onClick={() => navigate(`/orders/${order._id}`)}
          >
            {/* Top Info */}
            <Top>
              {/* id from _id, _id is too long, slice it */}
              <OrderId>
                #{order._id.slice(-6).toUpperCase()}
              </OrderId>
              <Status status={order.status}>
                {order.status}
              </Status>
            </Top>

            {/* date */}
            <DateText>
              {new Date(order.createdAt).toLocaleDateString()}
            </DateText>

            {/* products list */}
            <Items>
              {order.products.slice(0, 2).map((item, i) => (
                <Item key={i}>
                  <Image src={item.img} />
                  <ItemInfo>
                    <Name>{item.name}</Name>
                    <Qty>Qty: {item.quantity}</Qty>
                  </ItemInfo>
                </Item>
              ))}

              {order.products.length > 2 && (
                <More>+{order.products.length - 2} more items</More>
              )}
            </Items>

            {/* Total */}
            <Total>
              $ {Number(order.totalAmount.$numberDecimal)}
            </Total>
          </OrderCard>
        ))}
      </CardWrapper>
    </Container>
  );
};

export default OrdersPage;