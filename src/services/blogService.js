import database from '../database/models';
class blogService {
    static async getAllblogs() {
        try {
           const blog = await database.blog.findAll();
           if(blog){
               return blog;
           }else{
               return null;
           }
        } catch (error) {
            throw error;
        }
    }
    static async getOneblog(id) {
        try {
            const blogToFind = await database.blog.findOne({
                where: {
                    id: id
                }
            });
            if (blogToFind) {
                return blogToFind;
            }else{
                return null;
            }
            
        } catch (error) {
            throw error;
        }
    }
    static async Addblog(newblog) {
        try {
            return await database.blog.create(newblog);
        } catch (error) {
            throw error;
        }
    }
    static async updateblogs(id, newblog) {
        try {
            const blogToUpdate = await database.blog.findOne({
                where: {
                    id: id
                }
            });
            if (Object.values(blogToUpdate).length >= 1) {
                await database.blog.update(newblog, {
                    where: {
                        id: id
                    }
                });
                return newblog;
            }
            return null;
        } catch (error) {
            throw error;
        }
    }
    static async deleteblog(id) {
        try {
            const blogToDelete = await database.blog.findOne({
                where: {
                    id: id
                }
            });
            if (blogToDelete) {
                await database.blog.destroy({
                    where: {
                        id: id
                    }
                });
                return blogToDelete;
            }
            return null;
        } catch (error) {
            throw error;
        }
    }
}

export default blogService;