const skills = [
    {id: 0, skill: 'HTML', unit: '1', done: true},
    {id: 1, skill: 'CSS', unit: '1', done: true},
    {id: 2, skill: 'JavaScript', unit: '1', done: true},
    {id: 3, skill: 'NodeJS', unit: '2', done: false},
    {id: 4, skill: 'Express', unit: '2', done: false}
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
};

function getAll() {
    return skills
}
function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}
function create(skill) {
    skill.id = skills.length;
    skill.unit = 2;
    skill.done = false;
    skills.push(skill)
}
function deleteOne(id) {
    id = parseInt(id);
    const idx = skills.findIndex(skill => skill.id === id)
    skills.splice(idx, 1)
}
