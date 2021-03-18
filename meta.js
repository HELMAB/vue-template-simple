module.exports = {
    promtps: {
        name: {
            type: 'string',
            required: true,
            message: 'Project Name',
        },
        description: {
            type: 'String',
            required: false,
            message: '',
            default: 'My Awesome Project'
        },
        author: {
            type: 'string',
            message: 'Asorasoft'
        }
    },

    completeMessage: 'The project has been created!'
}