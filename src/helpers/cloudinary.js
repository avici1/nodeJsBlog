import dotenv from 'dotenv';
import { v2 as cloudinary } from 'cloudinary';
dotenv.config();

cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET
});

const upload = async(file)=>{
    const image = await cloudinary.uploader.upload(file,{
        overwrite: true
    });
    return image;
}
export default upload;