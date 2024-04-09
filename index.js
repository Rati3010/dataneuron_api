import express from 'express';


const app = express();
app.use(express.json());
app.get('/',(req,res)=>{
    res.send('Hi, this is basic backend')
})

app.listen(3000 ,()=>{
    console.log('connected to database successfully')
})