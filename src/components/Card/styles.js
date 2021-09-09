import styled from 'styled-components';

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 25rem;
  margin: 1rem;
  border-radius: 0.3rem;
  background-color: #fff;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  :hover {
    transition: 1s;
    background-color: #0001;
  }
`;

export const TitleCard = styled.h1`
  font-size: 1.6rem;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  height: 5.2rem;
`;

export const ContainerPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 8rem;
  margin: 0.4rem;
`;

export const PriceCard = styled.h1`
  font-size: 2rem;
  font-family: Arial, Helvetica, sans-serif;
`;

export const ImageCard = styled.img`
  height: 18rem;
  width: 22rem;
  margin: 1rem;
  border-radius: 1rem;
`;

export const Button = styled.div`
  background-color: ${(props) => props.color};
  padding: 1rem;
  border-radius: 0.7rem;
  width: 35%;
  margin: 0.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  :hover {
    background-color: ${(props) => props.hoverColor};
    transition: 0.8s;
  }
`;

export const TextButton = styled.h1`
  color: #fff;
  font-size: 1.8rem;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  margin-left: 1rem;
`;
