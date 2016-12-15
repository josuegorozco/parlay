export const schema = {
    type: 'object',
    properties: {
        users: {
            type: 'array',
            minItems: 3,
            maxItems: 5,
            items: {
                type: 'object',
                properties: {
                    id: {
                        type: 'number',
                        unique: true,
                        minimum: 1,
                    },
                    firstName: {
                        type: 'string',
                        faker: 'name.firstName',
                    },
                    lastName: {
                        type: 'string',
                        faker: 'name.lastName',
                    },
                    email: {
                        type: 'string',
                        faker: 'internet.email',
                    },
                },
                required: ['id', 'firstName', 'lastName', 'email'],
            },
        },
        notifications: {
            type: 'array',
            minItems: 3,
            maxItems: 5,
            items: {
                type: 'object',
                properties: {
                    id: {
                        type: 'number',
                        unique: true,
                        minimum: 1,
                    },
                    img: {
                        type: 'image',
                        faker: 'internet.avatar',
                    },
                    message: {
                        type: 'string',
                        faker: 'lorem.sentence',
                    },
                    timestamp: {
                        type: 'string',
                        faker: 'date.recent',
                    },
                },
                required: ['id', 'img', 'message', 'timestamp'],
            },
        },
    },
    required: ['users', 'notifications'],
};
