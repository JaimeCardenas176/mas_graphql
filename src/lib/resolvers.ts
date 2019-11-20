const courses = [
    {
    _id: '1',
    title:'graphql',
    teacher:'Jaime',
    description: 'descripcion del curso de graphql',
    topic:'desarrollo'
    },
    {
    _id: '2',
    title:'nodeJS',
    teacher:'David',
    description: 'descripcion del curso de nodeJS',
    topic:'desarrollo'
    },
    {
    _id: '3',
    title:'python',
    teacher:'Carlos',
    description: 'descripcion del curso de python',
    topic:'desarrollo'
    }
]

module.exports = {
    getCourses: () => {
        return courses;
    }
}