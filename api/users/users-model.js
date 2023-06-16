
const uuidv4 = require("uuid")

function generateId() {
    return uuidv4.v4();
}

const users = [];

const defaultUsers = [
    {id: generateId(), username:"firstUser", password:"123456"},
    {id: generateId(), username:"secondUser", password:"123456"}
]

defaultUsers.forEach(x=>{users.push(x)});

function getAllUsers(){
    return users;
}

function insert(user) {
    user.id = generateId();
    users.push(user);
    return user;
}

function findUser(username,password) {
    let existUser = users.find(x => x.username == username && x.password == password);
    return existUser;
}

module.exports = {
    getAllUsers,
    insert,
    findUser
}