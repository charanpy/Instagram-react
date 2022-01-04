import styled, { css, createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    /* font-family: 'Open Sans Condensed', sans-serif;
     */
    font-family: 'Alegreya Sans', serif;
    font-weight: 400;
    color: ${(props) => props.theme.text};
    background: ${(props) => props.theme.background};
  }
`;

export const SharedTheme = css`
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
`;

export const sharedBorder = css`
  border: ${(props) =>
    props.theme.mode
      ? '.3px solid rgba(255,255,255,0.199)'
      : '.3px solid rgba(0,0,0,0.2)'};
`;

export const sharedBorderHeader = css`
  border-bottom: ${(props) =>
    props.theme.mode
      ? '.3px solid rgba(255,255,255,0.199)'
      : '.3px solid rgba(0,0,0,0.2)'};
`;

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  ${SharedTheme}
`;

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
`;

export const Wrapper = styled.main`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
