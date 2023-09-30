import styled from "styled-components";

const BadgeContainer = ({ className, bgColor, textColor, margin, children }) => {
  return (
    <span
      className={className}
    >
      {children}
    </span>
  )
};

export const Badge = styled(BadgeContainer)`
  font-size: 18px;
  font-weight: 500;
  line-height: 1;
  background-color: ${({ bgColor }) => bgColor ? bgColor : '#fff'};
  color: ${({ textColor }) => textColor ? textColor : '#fff'};
  margin: ${({ margin }) => margin ? margin : '0px'};
  border-radius: 5px;
  padding: 8px;
`;