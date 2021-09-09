import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
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
  TitleRecommended,
  ContainerRecommended,
  SkeletonContainer,
} from './styles';
import Card from '../../components/Card';

export default function Details() {
  const [data, setData] = useState([]);
  const [recommended, setRecommended] = useState([]);
  const { id } = useParams();
  window.scrollTo(0, 0);

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

  useEffect(() => {
    (async () => {
      api
        .get('/example/products')
        .then((response) => {
          setRecommended(response.data);
        })
        .catch((err) => console.log(err));
    })();
  }, [api]);
  return (
    <Container>
      <LogoBC />
      {data.length !== 0 ? (
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
      ) : (
        <SkeletonContainer>
          <SkeletonTheme highlightColor="#faae00">
            <Skeleton count={1} height={100} />
            <Skeleton count={1} height={50} />
            <Skeleton count={1} height={100} />
            <Skeleton count={1} height={50} />
            <Skeleton count={1} height={100} />
            <Skeleton count={1} height={50} />
          </SkeletonTheme>
        </SkeletonContainer>
      )}

      <TitleRecommended>Recomendados</TitleRecommended>
      {data.length !== 0 ? (
        <ContainerRecommended>
          {recommended.slice(0, 3).map((item) => (
            <Card data={item} />
          ))}
        </ContainerRecommended>
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
