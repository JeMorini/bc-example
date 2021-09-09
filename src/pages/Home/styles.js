import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* background-color: #0002; */
  padding: 1rem;
`;

export const ContainerGrid = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: 26rem 26rem 26rem;
  @media (max-width: 1200px) {
    grid-template-columns: 26rem 26rem;
  }
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    position: relative;
  }
`;

export const Logo = styled.img`
  height: 5rem;
  width: 25rem;
`;
