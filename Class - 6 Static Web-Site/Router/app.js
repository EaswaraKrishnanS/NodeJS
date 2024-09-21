import express from 'express';
import morgan from 'morgan';
import user_router from './routing/user_router.js';

let app = express();
app.use(morgan('tiny'));

app.get('/', (req, res) => {
    res.send("Root Response");
});

app.use("/user", user_router);

app.listen(7000, '127.0.0.1', (err) => {
    if (err) throw err;
    console.log(`Server Is Running On ........ http://127.0.0.1:7000/`);
});
