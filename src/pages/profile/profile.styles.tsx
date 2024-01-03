import { Card, CardContent } from "@mui/material";
import styled from "styled-components";

export const StyledCardContent = styled(CardContent)`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const StyledCard = styled(Card)`
  min-width: 30%;
  max-width: 95%;
`;
