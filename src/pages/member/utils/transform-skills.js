export const transformSkills = skills => {
	const skillsLabels = Object.keys(skills);
	const skillsPercent = Object.values(skills);
	const skillsColors = ['#00e993', '#ff1b4c', '#ffc15a', '#5479ff'];
	let result = [];

	for (let i = 0; i < skillsLabels.length; i++) {
		result.push({
			label: skillsLabels[i],
			percent: skillsPercent[i],
			bgColor: skillsColors[i],
		});
	}

	return result;
};
