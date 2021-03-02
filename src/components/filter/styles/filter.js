import styled from "styled-components"

export const Container = styled.div`
  padding: 1rem 2rem;
`;

export const Group = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 1rem;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 16, 0.19),
  0 0.3rem 0.3rem rgba(0, 0, 16, 0.23);
`;

export const Text = styled.p`
  font-size: 1.3rem;
  padding: .3rem;
`;

export const Wrapper = styled.div`
  background: rgba(0,0,16,.8);
  margin-top: 1em;
  padding: .4rem;
  border: 3px solid #0365c0;
  border-radius: 2.2rem;
`;

export const Form = styled.form`
  display:flex;
  align-items: center;
`;

export const Input = styled.input`

`;

export const InputLabel = styled.label`
  height: 2rem;
  width: 2rem;
  margin: .5rem;
  background: no-repeat;
  border: 1px solid red;
  background-image: url(${({icon}) => icon})
`;

export const FormText = styled.span`
  font-size: 2rem;
  color: white;
  padding: .5rem 1rem;
`;

export const PageButton = styled.button``;
