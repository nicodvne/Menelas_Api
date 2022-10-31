const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get('/', (req, res)=>{
    res.send('Bienvenue sur Menelas')
});

const userRouter = require('./routes/user');
app.use('/user',userRouter);

const port = parseInt(process.env.PORT) || 8393;
app.listen(port, () => {
    console.log(`server started on ${port}`)
});