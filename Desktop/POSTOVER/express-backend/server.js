// Importing statements
import express from 'express';
import mongoose from 'mongoose';
import card from './dbphs.js';
import cors from 'cors';



//App config
const app =express();
const port = process.env.PORT;

//Middlewares
app.use(express.json());
app.use(cors());

//DB config
const connection_url ='mongodb+srv://mohit:8nTVQJw60Luix2vJ@cluster0.lpqhi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(connection_url,{
    useNewUrlParser:true,
    useUnifiedTopology:true,

}).then(()=>console.log('Mongodb successfully connected')).catch((e)=>console.log(e));

//Api routes
app.get('/',(req,res)=>res.status(200).send("Back-end"));

app.post('/upload',(req,res)=>{
    const dbph = req.body;

    card.create(dbph,(err,data)=>{
        if (err) {
            res.status(500).send(err);
        }
        else{
            res.status(201).send(data)
        }
    });

});

app.get('/get',(req,res)=>{

    card.find((err,data)=>{
        if (err) {
            res.status(500).send(err);
        }
        else{
            res.status(200).send(data)
        }
    });

});



//App listener
app.listen(port,()=>console.log(`listening on http://localhost:${port}`));





// 8nTVQJw60Luix2vJ