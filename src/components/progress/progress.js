import styled from "styled-components"

const ProgressContainer = ({ className, label, percent, bgColor, textColor }) => {
  return (
    <div className={className}>
      <div className="label">
        {label}
      </div>
      <div className="bar">
        <div className="percent">
          {percent}%
        </div>
      </div>
    </div>
  )
}

export const Progress = styled(ProgressContainer)`
  color: #707070;

  & .label {
    margin-bottom: 5px;
  }

  & .bar {
    height: 20px;
    width: 380px;
    background-color: #e5e5e5;
    border-radius: 5px;
  }

  & .percent {
    width: ${({ percent }) => percent}%;
    height: 20px;
    background-color: ${({ bgColor }) => bgColor};
    border-radius: 5px;
    color: ${({ textColor }) => textColor ? textColor : "#fff"};
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;