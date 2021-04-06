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

export const FormText = styled.span`
  font-size: 2rem;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
`;

export const RadioButton = styled.input.attrs({ type: "radio" })`
  opacity: 0;
  position: absolute;
`;

export const RadioLabel = styled.label`
  margin: .5em;
  cursor: pointer;

  svg {
    width: 2.2rem;
    height: 2.2rem;

    &.beer {
      fill: ${({checked}) => checked ? "#ffb144" : "#f2f2f2"};

      &:hover {
        fill: #ffb144
      }
    }
    
    &.hops {
      fill: ${({checked}) => checked ? "green" : "white"};

      &:hover {
        fill: green
      }
    }
  }

  > ${FormText} {
    color: ${({checked}) => checked ? "#0365c0" : "white"};

    &:hover {
      color: #0365c0
    }
  }
`;


export const PageButton = styled.button`
  border: none;
  background-color: transparent;
  outline: none;
  font-size: 2rem;
  padding: .2rem .8rem 0 .8rem;
  color: #f2f2f2;
  cursor: pointer;
  transition : color 0.1s ease-in-out;

  &:hover {
    color: #0365c0;
  }

  &:disabled {
    color: black;
    cursor: default;
  }
`;
