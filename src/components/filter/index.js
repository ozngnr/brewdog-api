import React from "react"
import { Container, 
  Group, 
  Card, 
  Text,
  Wrapper, 
  Form, 
  Input,
  InputLabel, 
  FormText,
  PageButton 
} from "./styles/filter"

export default function Filter({children, ...restProps}) {
  return <Container {...restProps}>{children}</Container>
}

Filter.Group = function FilterGroup({children, ...restProps}) {
  return <Group {...restProps}>{children}</Group>
}

Filter.Card = function FilterCard({children, ...restProps}) {
  return <Card {...restProps}>{children}</Card>
}

Filter.Text = function FilterText({children, ...restProps}) {
  return <Text {...restProps}>{children}</Text>
}

Filter.Wrapper = function FilterWrapper({children, ...restProps}) {
  return <Wrapper {...restProps}>{children}</Wrapper>
}

Filter.Form = function FilterForm({children, ...restProps}) {
  return <Form {...restProps}>{children}</Form>
}

Filter.Input = function FilterInput({...restProps}) {
  return <Input {...restProps}/>
}

Filter.InputLabel = function FilterInputLabel({...restProps}) {
  return <InputLabel {...restProps} />
}

Filter.FormText = function FilterFormText({children, ...restProps}) {
  return <FormText {...restProps}>{children}</FormText>
}

Filter.PageButton = function FilterPageButton({children, ...restProps}) {
  return <PageButton {...restProps}>{children}</PageButton>
}