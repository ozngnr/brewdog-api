import styled from "styled-components"

export const Container = styled.div`
  display:flex;
  align-items: flex-end;
  justify-content: center;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 16, 0.19),
  0 0.3rem 0.3rem rgba(0, 0, 16, 0.23);
`;
export const Group = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 1em;
  padding: 0 2em;
  margin-bottom: 1em;
`;
export const Card = styled.div`
  width:100%;
  padding: 1em;
  position: relative;
`;
export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
export const Info = styled.div`
  display:flex;
  justify-content: space-around;
  width: 100%;
`;
export const Image = styled.img`
  margin: auto;
  height: 20rem;
`;
export const SubTitle = styled.h3`
  font-size: 1.25rem;
  margin-top: .75em;

`;
export const ItemText = styled.p`
  margin-top: 1em;
  padding: 0 1em;
`;
export const Title = styled.h1`
  font-size: 2.4rem;
  text-align: center;
  margin-bottom: 1em;
`;
export const Tagline = styled.p`
  font-style: italic;
  padding-bottom: .5rem;
  border-bottom: 2px solid #0365c0;
`;
export const Content = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top:0;
  left: 0;
  background: white;
  padding: 1.5em;
  overflow: auto;
  opacity: 0;
  transition: opacity 0.3s ease-in;

  &:hover {
    opacity: 0.8;
  }
`;
export const ContentText = styled.p`
  margin: 1rem 0;
  font-size: 0.875rem;
  line-height: 1.4;
`;
export const ContentTextItalic = styled.p`
  font-style: italic;
  font-size: .9rem;
  line-height: 1.3em; 
`;
