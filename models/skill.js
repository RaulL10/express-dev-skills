const skills = [
    {id: 1, skill: 'HTML', unit: '1', done: true},
    {id: 2, skill: 'CSS', unit: '1', done: true},
    {id: 3, skill: 'JavaScript', unit: '1', done: true},
    {id: 4, skill: 'NodeJS', unit: '2', done: false},
    {id: 5, skill: 'Express', unit: '2', done: false}
];

module.exports = {
    getAll,
    getOne
};

function getAll() {
    return skills
}
function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}
