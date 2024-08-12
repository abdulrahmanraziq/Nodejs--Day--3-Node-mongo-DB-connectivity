import express from 'express';
import 'dotenv/config.js'
import Routes from './src/routes/index.js';
import cors from 'cors';
const app = express();
const PORT = process.env.PORT;
app.use(cors())
app.use(express.json());
app.use(Routes)

// mongoose.connect(`${process.env.MONGODB_URL}/${process.env.MONGODB_DB}`)
// .then((value) => console.log('MongoDb Connected'))
// .catch((err) => console.log(err));console.log('process:', process.env.PORT)

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
})