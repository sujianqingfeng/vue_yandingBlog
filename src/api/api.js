
const baseUrl = process.env.NODE_ENV === 'production' ? 'http://yandingblog.cn:8000' : 'http://127.0.0.1:8000'

export const login = `${baseUrl}/oauth/pc_login/`
export const githubLogin = `${baseUrl}/oauth/github_login`
export const githubCheck = `${baseUrl}/oauth/pc_github_check`

export const userInfoId = (id) => `${baseUrl}/users/${id}/`
export const userInfoName = `${baseUrl}/users/infos_by_name/`
export const myInfo = `${baseUrl}/users/infos/`
export const editUser = (id) => `${baseUrl}/users/${id}/`

export const categorysId = `${baseUrl}/category/list_by_id/`
export const categorysName = `${baseUrl}/category/list_by_name/`
export const updateCategory = (id) => `${baseUrl}/category/${id}/`
export const category = (id) => `${baseUrl}/category/`

export const getFriend = (id) => `${baseUrl}/friend/${id}/links/`

export const blogsId = `${baseUrl}/blogs/list_by_id/`
export const blogsName = `${baseUrl}/blogs/list_by_name/`
export const uploadImg = () => `${baseUrl}/img_upload/`

export const blogsDetailId = (id) => `${baseUrl}/blogs/${id}/`
export const blogs = `${baseUrl}/blogs/`

export const link = `${baseUrl}/friend/`
export const linkId = (id) => `${baseUrl}/friend/${id}/`

export const aboutId = (id) => `${baseUrl}/about/${id}/`
export const about = `${baseUrl}/about/`

export const summaryId = (id) => `${baseUrl}/summary-img/${id}/`
export const summary = `${baseUrl}/summary-img/`
