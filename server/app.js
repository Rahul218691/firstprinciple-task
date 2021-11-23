require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const connectDB = require('./src/config/db');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(helmet());
app.use(express.static('public'));


app.use('/api',require('./src/routes/testimonial'));


if(process.env.NODE_ENV === 'production'){
	//set static folder
	app.use(express.static('client/build'));

	app.get('*',(req,res) =>{
		res.sendFile(path.resolve(__dirname,'client', 'build', 'index.html'))
	})
}


const PORT = process.env.PORT || 5000;

connectDB();
app.listen(PORT,()=>{
	console.log(`App Listening to port ${PORT}`)
});