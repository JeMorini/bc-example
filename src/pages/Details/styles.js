import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

export const ContainerFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
  }
`;

export const ContainerDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: column;
  border: solid 0.05rem #0006;
  grid-template-columns: 26rem 26rem 26rem;
  padding: 1rem;
  border-radius: 0.4rem;
`;

export const Image = styled.img`
  height: 40rem;
  width: 50rem;
  margin: 1rem;
`;

export const Title = styled.h1`
  font-size: 1.6rem;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  height: 5.2rem;
`;

export const DetailsData = styled.p`
  font-size: 1.2rem;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  height: 5.2rem;
`;

export const CategoryData = styled.h3`
  font-size: 1.2rem;
  font-family: Arial, Helvetica, sans-serif;
  p {
    font-size: 1.2rem;
    font-family: Arial, Helvetica, sans-serif;
    color: #642580;
  }
`;

export const Button = styled.div`
  background-color: ${(props) => props.color};
  padding: 1rem;
  border-radius: 0.7rem;
  width: 75%;
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

export const Logo = styled.img`
  height: 5rem;
  width: 25rem;
`;
