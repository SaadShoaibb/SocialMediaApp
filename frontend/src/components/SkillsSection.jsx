import { Briefcase, X } from "lucide-react";
import { useState } from "react";

const SkillsSection = ({ userData, isOwnProfile, onSave }) => {
	const [isEditing, setIsEditing] = useState(false);
	const [skills, setSkills] = useState(userData.skills || []);
	const [newSkill, setNewSkill] = useState("");

	const handleAddSkill = () => {
		if (newSkill.trim()) {
			setSkills([...skills, newSkill.trim()]);
			setNewSkill("");
		}
	};

	const handleDeleteSkill = (skillToDelete) => {
		setSkills(skills.filter((skill) => skill !== skillToDelete));
	};

	const handleSave = () => {
		onSave({ skills });
		setIsEditing(false);
	};

	return (
		<div className='bg-white shadow rounded-lg p-6 mb-6'>
			<h2 className='text-xl font-semibold mb-4'>Skills</h2>
			{skills.map((skill) => (
				<div key={skill} className='mb-4 flex justify-between items-start'>
					<div className='flex items-start'>
						<Briefcase size={20} className='mr-2 mt-1' />
						<div>
							<h3 className='font-semibold'>{skill}</h3>
						</div>
					</div>
					{isEditing && (
						<button onClick={() => handleDeleteSkill(skill)} className='text-red-500'>
							<X size={20} />
						</button>
					)}
				</div>
			))}

			{isEditing && (
				<div className='mt-4'>
					<input
						type='text'
						placeholder='Add a skill'
						value={newSkill}
						onChange={(e) => setNewSkill(e.target.value)}
						className='w-full p-2 border rounded mb-2'
					/>
					<button
						onClick={handleAddSkill}
						className='bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark transition duration-300'
					>
						Add Skill
					</button>
				</div>
			)}

			{isOwnProfile && (
				<>
					{isEditing ? (
						<button
							onClick={handleSave}
							className='mt-4 bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark transition duration-300'
						>
							Save Changes
						</button>
					) : (
						<button
							onClick={() => setIsEditing(true)}
							className='mt-4 text-primary hover:text-primary-dark transition duration-300'
						>
							Edit Skills
						</button>
					)}
				</>
			)}
		</div>
	);
};

export default SkillsSection;
