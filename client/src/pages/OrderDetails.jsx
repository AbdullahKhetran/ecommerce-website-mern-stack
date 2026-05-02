import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getSingleOrder } from "../api";
import { CircularProgress } from "@mui/material";
import styled from "styled-components"

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

const OrderCard = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 16px;
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
  gap: 12px;
  margin-top: 10px;
`;

const Item = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const Image = styled.img`
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
`;

const ItemInfo = styled.div``;

const Name = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${({theme}) => theme.text_primary};
`;

const Size = styled.div`
  font-size: 16px;
  font-weight: 500;
`

const Qty = styled.div`
  font-size: 16px;
  color: gray;
`;

const Price = styled.div`
  font-size: 18px;
  font-weight: 500;
  text-align: right;
`

const Total = styled.div`
  border-top: 1px solid ${({ theme }) => theme.primary};
  margin-top: 12px;
  padding-top: 6px;
  font-weight: 700;
  text-align: right;
  font-size: 22px;
`;

function OrderDetails() {
  const {id} = useParams()
  const [loading, setLoading] = useState(true)
  const [order, setOrder] = useState()

  // call function on mount and when id changes
  useEffect(() => {
    const fetchSingleOrder = async () => {
      // console.log("in fetch single order function")
      try {
        const token = localStorage.getItem("krist-app-token")
        const res = await getSingleOrder(token, id)
        setOrder(res.data)
      } catch (error) {
        console.log(error)
      } finally{
        setLoading(false)
      }
    }

    fetchSingleOrder()
  }, [id])

  if (loading) return  <CircularProgress sx={{fontSize: "20px"}} />
  
  return (
    <Container>
      <OrderCard>
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
          {order.products.map((item, i) => (
            <Item key={i}>
              <Image src={item.img} />
              <ItemInfo>
                <Name>{item.name}</Name>
                <Size>Size: {item?.size}</Size>
                <Qty>Quantity: {item.quantity}</Qty>
                <Price>${item.quantity * item.price.$numberDecimal}</Price>
              </ItemInfo>
            </Item>
          ))}
        </Items>

        {/* Total */}
        <Total>
          $ {Number(order.totalAmount.$numberDecimal)}
        </Total>
      </OrderCard>
    </Container>
  )
}

export default OrderDetails