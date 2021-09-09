import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BiCartAlt, BiHeart } from 'react-icons/bi';
import api from '../../services/api';
import LogoBC from '../../components/LogoBC';
import {
  Container,
  Image,
  Title,
  ContainerDetails,
  DetailsData,
  CategoryData,
  Button,
  TextButton,
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
          setData(response.data);
        })
        .catch((err) => console.log(err));
    })();
  }, [id]);
  return (
    <Container>
      <LogoBC />
      <ContainerFlex>
        <Image src={data?.photo_url} />
        <ContainerDetails>
          <CategoryData>
            Categoria: <p>{data?.category}</p>
          </CategoryData>
          <Title>{data?.name}</Title>
          <DetailsData>{data?.description}</DetailsData>
          <Button color="#642580" hoverColor="#400c58">
            <BiCartAlt size={30} color="#FFF" />
            <TextButton>Comprar</TextButton>
          </Button>
          <Button color="#faae00" hoverColor="#9e6e00">
            <BiHeart size={30} color="#FFF" />
            <TextButton>Favoritos</TextButton>
          </Button>
        </ContainerDetails>
      </ContainerFlex>
    </Container>
  );
}
