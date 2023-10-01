import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectMember } from '../../redux/selectors';
import { H2, Photo, Progress, TextBlock } from '../../components';
import { transformSkills } from './utils';
import styled from 'styled-components';

const MemberContainer = ({ className }) => {
	const { id } = useParams();
	const member = useSelector((state) => selectMember(state, id));

	return (
		<div className={className}>
			<div className='info-wrapper'>
				<Photo src={member.photo} />

				<div className='info'>
					<H2
						badge={member.role}
						badgeBgColor='green'
					>
						{`${member.name} ${member.surname}`}
					</H2>

					<div className='age'>
						{`Возраст: ${member.age}`}
					</div>

					<TextBlock
						title='Обо мне'
						info={member.about}
					/>
					<TextBlock
						title='Вклад в проект'
						info={member.job}
					/>
					<TextBlock
						title='Социальные сети'
						info={member.social}
					/>
				</div>
			</div>

			<div className='skills'>
				<H2>Навыки</H2>
				{transformSkills(member.skills).map(({ label, percent, bgColor }) => {
					return (
						<Progress
							key={label + id}
							label={label}
							percent={percent}
							bgColor={bgColor}
						/>
					)
				})}
			</div>
		</div>
	)
}

export const Member = styled(MemberContainer)`
	padding: 50px 0;
	max-width: 800px;
	margin: 0 auto;

	& .info-wrapper {
		display: flex;
		justify-content: space-between;
		margin: 0 auto;
		margin-bottom: 50px;
	}

	& .info {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		max-width: 430px;
	}
`;
