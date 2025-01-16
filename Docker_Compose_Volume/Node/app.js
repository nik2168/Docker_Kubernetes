import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors'

const app = express();

// Load environment variables
dotenv.config({path: '.env'});

const corsOptions = {
  origin: [
    "http://localhost:3000",
    "http://localhost:3001",
    "http://client_container:3001",
    process.env.CLIENT_URL,
    "http://nextapp:3001",
    "http://127.0.0.1:3001"
  ],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
};
app.use(cors(corsOptions));

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Default route
app.get('/', (req, res) => {
    res.send('Hello World');
});

const User = mongoose.models.User || mongoose.model('User', {
    name: String,
    email: String,
});




mongoose.connect(process.env.MONGO_URI, {dbName: 'test'})
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log('Could not connect to MongoDB', err));


// Start the server
const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log(`MongoDB URI: ${process.env.MONGO_URI}`);
});


app.post("/api/user", async (req, res) => {
    try {
        const { name, email } = req.body;
        console.log('Received request body:', req.body);
        
        if (!name || !email) {
            return res.status(400).json({ 
                success: false, 
                message: "Name and email are required" 
            });
        }

        console.log('Creating user with data:', { name, email });
        
        const user = await User.create({ name, email });
        console.log('Created user:', user);
        
        return res.status(201).json({ 
            success: true, 
            message: "New user created!", 
            user 
        });
    } catch (error) {
        console.error('Error creating user:', error);
        return res.status(500).json({ 
            success: false, 
            message: error.message 
        });
    }
});