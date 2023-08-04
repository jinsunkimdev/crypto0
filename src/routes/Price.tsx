import styled from "styled-components";

const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const PriceItem = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  padding: 10px 0;
  border-bottom: 1px solid ${(props) => props.theme.textColor};

  &:last-child {
    border-bottom: none;
  }

  span {
    font-weight: bold;
  }
`;

interface PriceProps {
  priceData: {
    price: number;
    maxSupply: number | null;
  };
}

function Price({ priceData }: PriceProps) {
  const priceDifference = priceData.maxSupply
    ? priceData.maxSupply - priceData.price
    : 0;
  const percentageDifference = priceData.maxSupply
    ? ((priceDifference / priceData.maxSupply) * 100).toFixed(2)
    : 0;

  return (
    <PriceContainer>
      <PriceItem>
        <span>Current Price:</span>
        <span>${priceData.price.toFixed(3)}</span>
      </PriceItem>
      <PriceItem>
        <span>Max Supply Price:</span>
        <span>${priceData.maxSupply ? priceData.maxSupply.toFixed(3) : 0}</span>
      </PriceItem>
      <PriceItem>
        <span>Difference:</span>
        <span>${priceDifference.toFixed(3)}</span>
      </PriceItem>
      <PriceItem>
        <span>Percentage Difference:</span>
        <span>{percentageDifference}%</span>
      </PriceItem>
    </PriceContainer>
  );
}

export default Price;
