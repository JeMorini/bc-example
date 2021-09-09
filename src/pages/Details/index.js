import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BiCartAlt, BiHeart } from 'react-icons/bi';
import api from '../../services/api';
import {
  Container,
  Image,
  Title,
  ContainerDetails,
  DetailsData,
  CategoryData,
  Button,
  TextButton,
  Logo,
  ContainerFlex,
} from './styles';

export default function Details() {
  const [data, setData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    (async () => {
      await api
        .get(`/example/products/${id}`)
        .then((response) => {
          console.log(response.data);
          setData(response.data);
        })
        .catch((err) => console.log(err));
    })();
  }, [id]);
  return (
    <Container>
      <Logo
        src={`https://portalfranchising.com.br/wp-content/uploads/2019/09/bomcupom-marca.png`}
      />
      <ContainerFlex>
        <Image src={data?.photo_url} />
        <ContainerDetails>
          <CategoryData>
            Categoria: <p>{data?.category}</p>
          </CategoryData>
          <Title>{data?.name}</Title>
          <DetailsData>{data?.description}</DetailsData>
          <Button color={'#642580'} hoverColor={'#400c58'}>
            <BiCartAlt size={30} color="#FFF" />
            <TextButton>Comprar</TextButton>
          </Button>
          <Button color={'#faae00'} hoverColor={'#9e6e00'}>
            <BiHeart size={30} color="#FFF" />
            <TextButton>Favoritos</TextButton>
          </Button>
        </ContainerDetails>
      </ContainerFlex>
    </Container>
  );
}
