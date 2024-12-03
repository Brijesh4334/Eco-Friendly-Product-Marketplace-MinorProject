const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors')

const UserRouter = require('./routers/user');
const ContactRouter = require('./routers/contact')
const ProductRouter = require('./routers/product')


// middleware
app.use(express.json())
app.use(cors({
    origin: ['http://localhost:3000'],
}))

app.use('/user', UserRouter);
app.use('/product', ProductRouter);

app.use('/contact', ContactRouter)


app.listen(port,() => {
    console.log(`Server is running on port ${port}`)
})