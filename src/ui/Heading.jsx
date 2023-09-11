import { css, styled } from "styled-components";

// const test = css`
//   text-align: center;
//   /* background-color: ${(10 > 20 && "yellow") || "blue"}; */
//   ${10 > 2 && "background-color: yellow"}
// `;

const Heading = styled.h1`
  ${(props) => {
    return (
      props.as === "h1" &&
      css`
        font-size: 3rem;
        font-weight: 600;
      `
    );
  }}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 2rem;
      font-weight: 600;
    `}
  ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 1rem;
      font-weight: 600;
    `}
`;
export default Heading;
