// basic template 

const express = require("express");
const friends = require("./friends");
const app = express()
const hostname = "localhost"
const port = "8000"



app.get ("/",(req,res) =>{
    res.send("app is runing perfect")
});


// get method 
app.use(express.json())
app.get("/api/friends" , (req,res) =>{
    res.json(friends)
})

// post method 
app.post ("/api/friends", (req,res) =>{

    const frd = {
        "id": req.body.id,
        "name":req.body.name,
        "status" : req.body.status,
        "nickname": req.body.nickname
    }
    friends.push(frd)
    res.json(frd)
})

// delete 
app.delete("/api/friends", (req,res) =>{
    let id = req.params.id
    let index = friends.findIndex((friends) =>{
        return(friends.id == Number.parseInt(id))


    })

    let df = friends[index]
    friends.splice(index,1)
    res.send("delete successfully")
})



// listen app 
app.listen(port,() =>{
    console.log(`app is runing on http://${hostname}:${port}`)
})