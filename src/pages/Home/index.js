import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import Card from '../../components/Card';
import LogoBC from '../../components/LogoBC';
import { Container, ContainerGrid } from './styles';

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
      <ContainerGrid>
        {data.map((item) => (
          <Card data={item} />
        ))}
      </ContainerGrid>
    </Container>
  );
}
