import styled from "styled-components"
   
export const Box = styled.div`
  padding: 40px 40px;
  /* background: linear-gradient( 90deg, rgb(39, 217, 255) 0%, #ffcce7 100% );; */
  background:rgb(39,217,255);
  position: absolute;
  bottom: 434;
  width: 100%;
  
   
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;
   
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
    /* background: red; */
`
   
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align:left;
  margin-left: 40px;
`;
   
export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 
                         minmax(110px, 1fr));
  grid-gap: 5px;
   
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, 
                           minmax(91px, 1fr));
  }
`;
   
export const FooterLink = styled.a`
  color: #000;
  margin-bottom: 10px;
  font-size: 18px;
  text-decoration: none;
  text-align: center;
  margin-left: 70px;
   
  &:hover {
      /* color: "green"; */
      color: red;
      transition: 200ms ease-in;
  }
`;
   
export const Heading = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
`;