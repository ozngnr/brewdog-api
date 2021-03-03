import React from 'react';
import { 
  Container, 
  Group, 
  Card, 
  Item, 
  Image, 
  Title, 
  SubTitle, 
  Info,
  ContentText,
  Content,
  Tagline,
  ItemText,
  ContentTextItalic 
} from './styles/beer';

export default function Beer({children, ...restProps}) {
  return <Container {...restProps}>{children}</Container>
};

Beer.Group = function BeerGroup({ children, ...restProps}) {
  return <Group {...restProps}>{children}</Group>
}

Beer.Card = function BeerCard({children, ...restProps}) {
  return <Card {...restProps}>{children}</Card>
}

Beer.Item = function BeerCard({children, ...restProps}) {
  return <Item {...restProps}>{children}</Item>
}

Beer.Image = function BeerImage({ src, ...restProps}) {
  return <Image src={src} {...restProps} />
}

Beer.Title = function BeerTitle({ children, ...restProps}) {
  return <Title {...restProps}>{children}</Title>
}

Beer.SubTitle = function BeerSubTitle({ children, ...restProps}) {
  return <SubTitle {...restProps}>{children}</SubTitle>
}

Beer.Info = function BeerInfo({ children, ...restProps}) {
  return <Info {...restProps}>{children}</Info>
}

Beer.ItemText = function BeerItemText({ children, ...restProps}) {
  return <ItemText {...restProps}>{children}</ItemText>
}

Beer.Content = function BeerContent({ children, ...restProps}) {
  return <Content {...restProps}>{children}</Content>
}

Beer.Tagline = function BeerTagline({ children, ...restProps}) {
  return <Tagline {...restProps}>{children}</Tagline>
}

Beer.ContentText = function BeerContentText({ children, ...restProps}) {
  return <ContentText {...restProps}>{children}</ContentText>
}

Beer.ContentTextItalic = function BeerContentTextItalic({ children, ...restProps}) {
  return <ContentTextItalic {...restProps}>{children}</ContentTextItalic>
}