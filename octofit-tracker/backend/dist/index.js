"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit';
const PORT = process.env.PORT || 8000;
mongoose_1.default
    .connect(MONGODB_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('MongoDB connection error', err));
app.get('/', (_req, res) => {
    res.json({ message: 'Octofit Tracker API' });
});
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
