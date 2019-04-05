import React from "react";
import styled from "styled-components";

const StyledSpinnerWrapper = styled.div`
  background-image: -webkit-radial-gradient(
      50% 50%,
      circle,
      rgba(0, 0, 0, 0.1) 50%,
      rgba(0, 0, 0, 1) 100%
    ),
    -webkit-linear-gradient(-90deg, #f33 45%, #333 45%, #3f3f3f 50%, #333 55%, #fff
          55%);
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
`;

const StyledSpinner = styled.div`
  width: 10rem;
  height: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    color: #000;
    text-transform: uppercase;
  }
`;

export default function Fetching() {
  return (
    <StyledSpinnerWrapper className="d-flex justify-content-center align-items-center">
      <StyledSpinner className="spinner-grow text-light" role="status">
        <span>Loading</span>
      </StyledSpinner>
    </StyledSpinnerWrapper>
  );
}
