import styled from "styled-components";

export const LayoutProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  justify-content: flex-start;
  @media screen and (orientation: portrait) {
    align-items: center;
  }
`;
