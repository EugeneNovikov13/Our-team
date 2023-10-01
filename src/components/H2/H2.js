import styled from "styled-components"
import { Badge } from "../badge/badge";

const H2Container = ({ className, margin, badge, badgeBgColor, badgeTextColor, children }) => {
  return (
    <div className={className}>
      <h2>
        {children}
      </h2>
      {badge &&
        <Badge
          bgColor={badgeBgColor}
          textColor={badgeTextColor}
        >
          {badge}
        </Badge>
      }
    </div>
  )
};

export const H2 = styled(H2Container)`
  display: flex;
  align-items: center;
  margin: ${({ margin }) => margin ? margin : '0px'};

  & h2 {
    font-size:${({ badge }) => badge ? '26px' : '22px'};
    font-weight: 500;
    color: #707070;
    line-height: 1;
    margin: 0;
    margin-right: ${({ badge }) => badge ? '10px' : ''};
  }
`;