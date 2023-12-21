import {useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {selectMembers} from '../../redux/selectors';
import {H2, Photo, Progress, TextBlock} from '../../components';
import {transformSkills} from './utils';
import styled from 'styled-components';

const MemberContainer = ({className}) => {
	const {id} = useParams();
	const member = useSelector(selectMembers)[id];


	return (
		<div className={className}>
			<div className='info-wrapper'>
				<Photo src={member.photo}/>

				<div className='info'>
					<H2 badge={member.role} badgeBgColor='#00b486'>
						{`${member.name} ${member.surname}`}
					</H2>

					<div className='age'>{`Возраст: ${member.age}`}</div>

					<TextBlock title='Обо мне' info={member.about}/>
					<TextBlock title='Вклад в проект' info={member.job}/>
					<TextBlock title='Социальные сети' info={member.social}/>
				</div>
			</div>

			<div className='skills'>
				<H2>Навыки</H2>
				{transformSkills(member.skills).map(({label, percent, bgColor}) => {
					return (
						<Progress
							key={label + id}
							label={label}
							percent={percent}
							bgColor={bgColor}
						/>
					);
				})}
			</div>
		</div>
	);
};

export const Member = styled(MemberContainer)`
	padding: 50px 0;
	max-width: 800px;
	margin: 5%;

	& .info-wrapper {
		display: flex;
		justify-content: space-between;
		margin: 0 auto 50px;
		flex-flow: wrap;
	}

	& .info {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		max-width: 430px;
		margin: 5% 0;
	}
`;
