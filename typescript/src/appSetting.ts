import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors({
    origin: "*",
    methods: "GET, POST, PUT, DELETE",
    allowedHeaders: "Content-Type, Authorization"
}));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.json({
        message: "This service is for learning MongoDB with Express.ts by @poommieiei :D"
    });
});

export default app;