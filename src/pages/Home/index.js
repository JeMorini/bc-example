import React, { useEffect, useState } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import api from '../../services/api';
import Card from '../../components/Card';
import LogoBC from '../../components/LogoBC';
import { Container, ContainerGrid, SkeletonContainer } from './styles';

export default function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      api
        .get('/example/products')
        .then((response) => {
          console.log(response.data);
          setData(response.data);
        })
        .catch((err) => console.log(err));
    })();
  }, []);
  return (
    <Container>
      <LogoBC />
      {data.length !== 0 ? (
        <ContainerGrid>
          {data.map((item) => (
            <Card data={item} />
          ))}
        </ContainerGrid>
      ) : (
        <SkeletonContainer>
          <SkeletonTheme highlightColor="#642580">
            <Skeleton count={1} height={100} />
            <Skeleton count={1} height={50} />
            <Skeleton count={1} height={100} />
            <Skeleton count={1} height={50} />
            <Skeleton count={1} height={100} />
            <Skeleton count={1} height={50} />
          </SkeletonTheme>
        </SkeletonContainer>
      )}
    </Container>
  );
}
