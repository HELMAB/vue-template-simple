module.exports = {
    promtps: {
        name: {
            type: 'string',
            required: true,
            message: 'Project Name',
        },
        description: {
            type: 'string',
            required: true,
            message: 'My Awesome Project'
        },
        author: {
            type: 'string',
            message: 'Jonh Doe'
        }
    },

    completeMessage: 'The project has been created!'
}