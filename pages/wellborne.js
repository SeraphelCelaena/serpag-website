import {useState, useEffect} from 'react';

import { getPages } from "@/utils/api/serpag-backend";
import NavBar from '@/components/NavBar';

export default function Wellborne() {
	const [skills, setSkills] = useState();

	useEffect(() => {
		loadSkills();
	}, []);

	const loadSkills = async () => {
		const data = await getPages();
		setSkills(data);
	}

	useEffect(() => {
		console.log(skills);
	}, [skills]);

	return <main>
		<NavBar title="Wellborne"></NavBar>
		{skills && skills.map((skill, index) => {
			return <div key={index}>
				<h3>{skill.skillname}</h3>
				{skill.subcontent && skill.subcontent.map((subskill, subIndex) => {
					return <ul key={subIndex}>
						<li>{subskill.subskillname}</li>
						<ul>
						{subskill.subsubskills && subskill.subsubskills.map((subsubskill, subsubIndex) => {
							return <li key={subsubIndex}>{subsubskill}</li>
						})}
						</ul>
					</ul>
				})}
			</div>
		})}
	</main>;
}
