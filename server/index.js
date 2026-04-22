import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json({limit: "50mb"}));
app.use(express.urlencoded({extended: true}));

app.get("/", async(req,res) => {
    res.status(200).json({
        message: "Hello World"
    });
});

const startServer = async() => {
    try {
        app.listen(8080, () => console.log("Server started on port 880"))
    } catch (error) {
        console.log(error);        
    }
}

startServer()