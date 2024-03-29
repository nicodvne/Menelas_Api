const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const { Sequelize } = require('sequelize');
const dbInit = require('./services/database/initDatabase.js');

require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use((_, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, Content-Type, X-Auth-Token"
    );
    next();
});

dbInit.init();

app.get('/', (req, res)=>{
    res.send('Bienvenue sur Menelas')
});

const dispatchRouter = require('./routes/dispatchRoutes.js')
app.use('/dispatch', dispatchRouter);

const userRouter = require('./routes/userRoutes.js');
app.use('/user', userRouter);

const muscleRouter = require('./routes/muscleRoutes.js');
app.use('/muscle', muscleRouter);

const exerciseRouter = require('./routes/exerciseRoutes.js');
app.use('/exercise', exerciseRouter);

const sessionGroupRouter = require('./routes/sessionGroupRoutes.js');
app.use('/session_group', sessionGroupRouter);

const sessionRouter = require('./routes/sessionRoutes.js');
app.use('/session', sessionRouter);

const dateSessionRouter = require('./routes/dateSessionRoutes.js');
app.use('/date_session', dateSessionRouter);

const dateExerciseSessionRouter = require('./routes/dateExerciseSessionRoutes.js');
app.use('/date_exercise_session', dateExerciseSessionRouter);

const exerciseSessionRouter = require('./routes/exerciseSessionRoutes.js');
app.use('/exercise_session', exerciseSessionRouter);

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