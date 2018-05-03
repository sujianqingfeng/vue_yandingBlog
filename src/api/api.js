
const baseUrl = 'http://127.0.0.1:8000/'

export const getUserInfo = (id) => `${baseUrl}users/${id}/`
export const getBlogList = (id) => `${baseUrl}blogs/${id}/blog_list/`
export const login = () => `${baseUrl}login/`
export const editUser = (id) => `${baseUrl}users/${id}/`
export const uploadImg = () => `${baseUrl}img_upload/`
export const saveBlog = () => `${baseUrl}blogs/`
export const updateBlog = (id) => `${baseUrl}blogs/${id}/`
export const getCategorys = (id) => `${baseUrl}category/${id}/category_list/`
export const updateCategory = (id) => `${baseUrl}category/${id}/`
export const getAbout = (id) => `${baseUrl}about/${id}/`
