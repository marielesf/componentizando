import styled from "styled-components";

const FooterStyle = styled.ul`
  text-align: center;
  padding: 3px;
  background-color: #fad0e0;
  color: white;
`;

function Footer() {
  return (
    <FooterStyle>
      <p>
        Author: Mariele Fontana
        <br />
      </p>
      <a href="https://www.vainaweb.com.br/">VNW</a>
    </FooterStyle>
  );
}

export default Footer;
