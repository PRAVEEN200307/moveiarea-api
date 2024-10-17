import express from 'express';
import moviesRoutes from './routes/movies_route.js';
import connectDB from './lib/db.js';
const SERVER_PORT = 5555;
const app = express();

// Data understanding middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
// Connect Db
connectDB();

app.get("/", (req, res) => {
    res.json({ gree: "Hello welcome" })
})
// CLIENT -> MIDDLEWARE -> SERVER
app.use('/movies',moviesRoutes)

app.listen(SERVER_PORT, () => {
    console.log(`server is the running on http://localhost:${SERVER_PORT}`);
});  

