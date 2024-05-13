// npm run dev

const express = require ('express');
const cors = require('cors');
const app = express();
const uuid = require('uuid');
const port = 3001;
app.use(express.json());
app.use(cors());

app.listen(port, () => {
    console.log(`🚀 Server Started on port ${port} 🚀`)
})
// app.get('/users', (request, response) => {
//     const {name,age} = request.query
//     return response.json({name, age})
// })


// app.get('/users', (request, response) => {
//     const {name,age} = request.body
//     return response.json({name,age})
// })


const users = []

const checkUserId = (request, response, next) => {
    const {id} = request.params
    const index = users.findIndex(user => user.id === id)
    if(index < 0){
        return response.status(404).json({message: "user not found"})
    }
    request.userIndex = index
    request.userID = id

    next()
}

app.get('/users', (request, response) => {
    return response.json(users)
})
app.post('/users', (request, response) => {
    const {name,age} = request.body;
    const user = {id:uuid.v4(),name,age};

    users.push(user);

    return response.status(201).json({user});
})
app.put('/users/:id', checkUserId, (request, response) => {
    const {name,age} = request.body;
    const index = request.userIndex;
    const id = request.userID;

    const updatedUser = {id,name,age}

    users[index] = updatedUser

    return response.json(updatedUser)
    
})
app.delete('/users/:id', checkUserId, (request, response) => {
    const index = request.userIndex

    users.splice(index,1)

    return response.status(204).json()
})

// app.put('/users/:id', (request, response) => {
//     const{id} = request.params
//     const {name,age} = request.body
//     const updatedUser = {id,name,age}

//     const index = users.findIndex(user => user.id === id)
//     if(index < 0){
//         return response.status(404).json({message: "user not found"})
//     }
   
//     users[index] = updatedUser

//     return response.json(updatedUser)
    
// })
// app.delete('/users/:id', (request, response) => {
//     const{id} = request.params
//     const index = users.findIndex(user => user.id === id)
//     if(index < 0){
//         return response.status(404).json({message: "user not found"})
//     }

//     users.splice(index,1)

//     return response.status(204).json()
// })
