import axios from "axios";

const CLOUNDINARY_API_UPLOAD = "https://api.cloudinary.com/v1_1/djoawum55/image/upload"
class FileService {
    static upload(image){
        const formData = new FormData();
        formData.append("file",image);
        formData.append("upload_preset",'xtzk3y5t')
        return axios.post(CLOUNDINARY_API_UPLOAD,formData)
    }
}

export default FileService