const skills = [
    {id: 0, skill: 'HTML', unit: '1', passed: 'Yes!'},
    {id: 1, skill: 'CSS', unit: '1', passed: 'Yes!'},
    {id: 2, skill: 'JavaScript', unit: '1', passed: 'Yes!'},
    {id: 3, skill: 'NodeJS', unit: '2', passed: 'Not Yet!'},
    {id: 4, skill: 'Express', unit: '2', passed: 'Not Yet!'}
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update,
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
    skill.passed = 'Not Yet!';
    skills.push(skill)
}
function deleteOne(id) {
    id = parseInt(id);
    const idx = skills.findIndex(skill => skill.id === id)
    skills.splice(idx, 1)
}
function update(id, skill) {
    const idx = skills.findIndex(skill => skill.id === parseInt(id))
    skill.id = parseInt(id)
    // skills.splice(idx, 1, skill)
}
