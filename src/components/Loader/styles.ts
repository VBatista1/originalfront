import styled from "styled-components";

interface ModalProps {
  status: boolean;
}

export const LoaderContainer = styled.div`
  display: ${(props: ModalProps) => (props.status ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.96);
  & > img {
    width: 400px;
  }
`;
