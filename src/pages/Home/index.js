import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import Card from '../../components/Card';
import { Container, Logo, ContainerGrid } from './styles';

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
      <Logo
        src={`https://portalfranchising.com.br/wp-content/uploads/2019/09/bomcupom-marca.png`}
      />
      <ContainerGrid>
        {data.map((item) => (
          <Card data={item} />
        ))}
      </ContainerGrid>
    </Container>
  );
}
