import styled from "styled-components"

const LoaderContainer = ({ className }) => {
  return (
    <div className={className}>
      <p>Загрузка</p>

      <div className="load-bar">
        <div className="load-bar-child" />
      </div>
    </div>
  )
}

export const Loader = styled(LoaderContainer)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  & p {
    font-size: 30px;
    font-weight: 500;
    text-align: center;
  }

  & .load-bar {
    position: relative;
    height: 30px;
    width: 300px;
    background-color: #e5e5e5;
  }

  & .load-bar-child {
    position: absolute;
    content: '';
    height: inherit;
    width: 50%;
    background-color: #707070;
    animation: loading;
    animation-duration: 3s;
    animation-iteration-count: infinite;
  }


  @keyframes loading {
    0% {
    width: 0%;
    left: 0;
  }

  25% {
    left: 0;
    width: 50%;
  }

  50% {
    width: 100%;
    right: 0;
  }

  75% {
    width: 50%;
    right: 0;
  }

  100% {
    width: 0%;
    right: 0;
  }
  }
`;
