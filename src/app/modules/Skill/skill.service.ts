import Skill from './skill.model';

const addSkill = async (payload: any) => {
  const skill = await Skill.create(payload);
  return { message: 'skill added', data: skill };
};

const skillServices = { addSkill };
export default skillServices;
