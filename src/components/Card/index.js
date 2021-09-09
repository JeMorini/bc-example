import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { BiCartAlt, BiHeart } from 'react-icons/bi';
import {
  ContainerCard,
  TitleCard,
  PriceCard,
  ImageCard,
  Button,
  TextButton,
  ContainerPrice,
} from './styles';

export default function Card({ data }) {
  const history = useHistory();
  const handleNavigateToDetails = useCallback(() => {
    history.push(`/details/${data.id}`);
  }, []);
  return (
    <ContainerCard onClick={handleNavigateToDetails}>
      <ImageCard src={data.photo_url} />
      <TitleCard>{data.name}</TitleCard>
      {/* <ContainerPrice> */}
      <PriceCard>R${data.price}</PriceCard>
      <ContainerPrice>
        <Button color={'#642580'} hoverColor={'#400c58'}>
          <BiCartAlt size={30} color="#FFF" />
        </Button>
        <Button color={'#faae00'} hoverColor={'#9e6e00'}>
          <BiHeart size={30} color="#FFF" />
        </Button>
      </ContainerPrice>
      {/* </ContainerPrice> */}
    </ContainerCard>
  );
}
