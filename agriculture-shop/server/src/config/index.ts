export const IS_PROD = process.env.NODE_ENV === "production";
export const PORT = process.env.PORT || 5000;
export const DATABASE_URI =
  process.env.DATABASE_URI || 
  "mongodb+srv://nguyenthilinh:VekGkuzpeT2Tk8e4@cluster0.dqiyi.mongodb.net/db?retryWrites=true&w=majority";
export const JWT_SECRET_KEY = `${process.env.JWT_SECRET}`;
export const JWT_EXPIRES_IN = "7d";
export const STRIPE_SECRET_KEY = `${process.env.STRIPE_SECRET_API_KEY}`;
export const GOOGLE_WEB_CLIENT_ID = `${process.env.GOOGLE_WEB_CLIENT_ID}`;
export const GOOGLE_ANDROID_CLIENT_ID = `${process.env.GOOGLE_ANDROID_CLIENT_ID}`;
export const GOOGLE_SECRET_KEY = `${process.env.GOOGLE_CLIENT_SECRET}`;
export const CLIENT_PUBLIC_URL = `${process.env.CLIENT_PUBLIC_URL}`;