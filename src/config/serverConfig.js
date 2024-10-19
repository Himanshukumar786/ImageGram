import dotenv from 'dotenv';
dotenv.config();
export const DB_URL = process.env.DB_URL;
export const CLOUDINARY_NAME = process.env.CLOUD_NAME;
export const CLOUDINARY_API_KEY = process.env.API_KEY;
export const CLOUDINARY_API_SECRET = process.env.API_SECRET;
