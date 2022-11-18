const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

app.use(express.json());
app.use(express.urlencoded({extended:false}));



app.get('/', (req, res)=>{
    res.send('Bienvenue sur Menelas')
});

const userRouter = require('./routes/user.js');
app.use('/user',userRouter);

app.use(
    '/docs',
    swaggerUi.serve, 
    swaggerUi.setup(swaggerDocument)
);


const stubRouter = require('./routes/stubRoutes.js');
app.use('/stub', stubRouter);

const port = parseInt(process.env.PORT) || 8393;
app.listen(port, () => {
    console.log(`server started on ${port}`)
});