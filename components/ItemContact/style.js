import styled from "styled-components";

export const Item = styled.div`
  margin-top: 0px;
  width: 100%;
  border-radius: 50%;
  display: flex;
  align-items: center;
  word-break: break-word;

  
  @media (max-width: 760px) {
   font-size: 12px;
  }
`;

export const Icon = styled.div`
  margin-right: 10px;
  color: white;
  display: flex;

  svg {
    width: 100px;
    height: 100px;
  }
`;

