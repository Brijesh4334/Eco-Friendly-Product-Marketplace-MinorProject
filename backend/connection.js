const mongoose = require('mongoose');
const url ="mongodb+srv://Brijeshkumar:brijesh123@cluster0.rnxd6.mongodb.net/mini?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(url)

.then((result) => {
    console.log('Connected to the database')
}).catch((err) => {
    console.log(err)
});

module.exports = mongoose;