import styled from "styled-components";

const ButtonContainer = ({ className, onClick, margin, children }) => {
  return (
    <button
      className={className}
      onClick={onClick}
    >
      {children}
    </button>
  )
}


export const Button = styled(ButtonContainer)`
  color: #707070;
  font-size: 18px;
  margin: ${({ margin }) => margin ? margin : '0px'};
  background-color: #fff;
  border: 1px solid #707070;
  border-radius: 8px;
  padding: 10px;
  cursor: pointer;
`;