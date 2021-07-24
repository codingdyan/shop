import bcryptjs from 'bcryptjs'

const users = [
    {
        name: 'Manager User',
        email: 'manager@example.com',
        password: bcryptjs.hashSync('123456',10),
        isAdmin: true
    },
    {
        name: 'John Doe',
        email: 'johndoe@example.com',
        password: bcryptjs.hashSync('123456',10)
    },
    {
        name: 'Jane Doe',
        email: 'janedoe@example.com',
        password: bcryptjs.hashSync('123456',10)
    },
    {
        name: 'Jane',
        email: 'jane@example.com',
        password: bcryptjs.hashSync('123456',10)
    }
    ,
    {
        name: 'Doe',
        email: 'doe@example.com',
        password: bcryptjs.hashSync('123456',10)
    }
    ,
    {
        name: 'Test Doe',
        email: 'test@example.com',
        password: bcryptjs.hashSync('123456',10)
    }
]

export default users