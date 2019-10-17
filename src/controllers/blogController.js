import imagesCloudinary from '../helpers/cloudinary';
import blogService from '../services/blogService';
import Util from '../helpers/Util';
const util = new Util();
class blogController {

    static async newBlog(req,res){

        try {
            const date = new Date();
            const data = req.body;
            const files = req.files.image;
            const images = await imagesCloudinary(files.tempFilePath);
            data.img = images.url;
            data.time = date.toDateString();
            const blog = await blogService.Addblog(data);
            (blog) ? util.setSuccessResponse(res,"added successfully",200,data) : util.setErrorResponse(res,"Can't add blog",400)
        } catch (error) {
            util.setErrorResponse(res,error,500);
        }
    }
    static async getListblog(req, res) {
        try {
            const blogList = await blogService.getAllblogs();
           (blogList) ? util.setSuccessResponse(res,"Posts",200,blogList) : util.setErrorResponse(res,"Can't find any blog post",400);
        } catch (error) {
            util.setError(400, error.message);
            return util.send(res);
        }

    }
    static async deleteBlog(req, res) {
        const {
            id
        } = req.params;
        if (id == null) {
            util.setError(404, 'Please provide a valid parameter');
            return util.send(res);
        } else {
            try {
                const deletedblog = await blogService.deleteblog(id);
                if (deletedblog) {
                    util.setSuccess(`blog with Id ${id} deleted successfully`, 200, deletedblog);
                    return util.send(res);
                   
                } else {
                    util.setError(404, `blog with Id ${id} not found`);
                    return util.send(res); 
                }

            } catch (error) {
                util.setError(404, `can't delete the blog >> ${error.message}`);
                return util.send(res);
            }



        }
    }
    static async updateblog(req, res) {
        const {
            id
        } = req.params;
        const updated = req.body;
        if (id == null) {
            util.setError(404, 'Please provide a valid parameter');
            return util.send(res);

        } else {
            try {

                if ((Object.values(updated).length >= 1) == false) {
                    util.setError(404, `sent empty fields`);
                    return util.send(res);
                } else {
                    const updated_blog = await blogService.updateblogs(id, updated);
                    if (Object.values(updated_blog).length >= 1) {
                        util.setSuccess('blog updated successfully', 200, updated_blog);
                        return util.send(res);

                    } else {
                        util.setError(404, `cant update a blog with id ${id}`);
                        return util.send(res);
                    }

                }

            } catch (error) {
                util.setError(404, 'Oops something Went wrong cant update the blog >> ' + error.message);
                return util.send(res);
            }
        }
    }
    static async getblog(req, res) {
       
        const id = req.query.id;
        try {
            const oneblog = await blogService.getOneblog(id);

            (oneblog) ? util.setSuccessResponse(res,"Found successfully",200,oneblog) : util.setErrorResponse(res,`Can't Find that blog of the ${id}`,400)

        } catch (error) {
            util.setErrorResponse(res,error.message,500)
        }
    }
}
export default blogController;