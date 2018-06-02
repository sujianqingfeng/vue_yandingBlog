
const baseUrl = process.env.NODE_ENV === 'production' ? 'http://yandingblog.cn:8000/' : 'http://127.0.0.1:8000/'

export const getUserInfo = (id) => `${baseUrl}users/${id}/`

export const login = () => `${baseUrl}oauth/login/`
export const editUser = (id) => `${baseUrl}users/${id}/`

export const getCategorys = (id) => `${baseUrl}category/${id}/category_list/`
export const updateCategory = (id) => `${baseUrl}category/${id}/`
export const category = (id) => `${baseUrl}category/`

export const getFriend = (id) => `${baseUrl}friend/${id}/links/`

export const getBlogList = (id) => `${baseUrl}blogs/${id}/blog_list/`
export const uploadImg = () => `${baseUrl}img_upload/`

export const blogsId = (id) => `${baseUrl}blogs/${id}/`
export const blogs = `${baseUrl}blogs/`

export const link = `${baseUrl}friend/`
export const linkId = (id) => `${baseUrl}friend/${id}/`

export const aboutId = (id) => `${baseUrl}about/${id}/`
export const about = `${baseUrl}about/`
