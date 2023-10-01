import { useEffect, useState } from 'react';
import styled from 'styled-components';

const ProgressContainer = ({ className, label, percent, bgColor, textColor }) => {
	const [animationPercent, setAnimationPercent] = useState(0);
	const [isAnimate, setIsAnimate] = useState(true);

	const randomPercent = () => {
		setAnimationPercent(Math.floor(Math.random() * 100));
	};

	let interval;

	useEffect(() => {
		interval = setInterval(randomPercent, 10);

		setTimeout(() => {
			clearInterval(interval);
			interval = 0;
			setIsAnimate(false);
		}, 3000);
	}, []);

	return (
		<div className={className}>
			<div className='label'>
				{label}
			</div>
			<div className='bar'>
				<div className='percent'>
					{isAnimate ? `${animationPercent}%` : `${percent}%`}
				</div>
			</div>
		</div>
	);
};

export const Progress = styled(ProgressContainer)`
  color: #707070;

  @keyframes progress {
    from {
      width: 0%;
    }

    to {
      width:  ${({ percent }) => percent}%;
    }
  }

  & .label {
    margin: 15px 0 5px 0;
    font-size: 18px;
    text-transform: uppercase;
    font-weight: 500;
  }

  & .bar {
    height: 25px;
    width: 100%;
    background-color: #e5e5e5;
    border-radius: 5px;
  }

  & .percent {
    width: ${({ percent }) => percent}%;
    height: inherit;
    background-color: ${({ bgColor }) => bgColor};
    border-radius: 5px;
    color: ${({ textColor }) => textColor ? textColor : '#fff'};
    display: flex;
    justify-content: center;
    align-items: center;
    animation: progress;
    animation-duration: 3s;
  }
`;
