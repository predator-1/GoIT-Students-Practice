/**
 * Create team
 */

const ROLES = {
  FRONTEND: 'front-end',
  BACKEND: 'back-end',
  PM: 'project manager',
};

const members = {}; // each member has 'name', 'salary', 'role'

const createMember = (salary, role) => {
  if (!Object.values(ROLES).includes(role)) {
    console.log('invalid role');
    return;
  }

  if (!(salary > 0)) {
    console.log('invalid salary');
    return;
  }

  return {
    salary,
    role,
  };
}; //factory

const addMemberByName = (name, currentMember) => {
  if (members.hasOwnProperty(name)) {
    console.log(`${name} exists`);
  }
  members[name] = currentMember;
};

const addMembers = (...freshmens) => {
  for (let freshmen of freshmens) {
    const [name, currentMember] = freshmen;
    addMemberByName(name, currentMember);
  }
};

const removeMemberByName = name => {
  delete members[name];
};

const getMembersCount = () => {
  return Object.keys(members).length;
};

const getTeamCost = () => {
  const keys = Object.keys(members);
  let total = 0;
  for (let key of keys) {
    total += members[key].salary;
  }
  return total;
}; // all members salaries

const getAvarageSalary = () => {
  return getTeamCost() / getMembersCount();
};

const removeMemberByRole = role => {
  const keys = Object.keys(members);
  for (let key of keys) {
    if (role === members[key].role) {
      delete members[key];
      return;
    }
  }
};

addMemberByName('alex', createMember(1100, ROLES.FRONTEND));
addMembers(
  ['david', createMember(1400, ROLES.BACKEND)],
  ['kriss', createMember(1000, ROLES.PM)],
);
removeMemberByName('david');

console.log(members);
console.log(getMembersCount());
console.log(getTeamCost());
console.log(getAvarageSalary());
removeMemberByRole(ROLES.PM);
