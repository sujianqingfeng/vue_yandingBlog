
const baseUrl = 'http://127.0.0.1:8000/'

export const getUserInfo = (id) => `${baseUrl}users/${id}/`
export const getBlogList = (id) => `${baseUrl}blogs/${id}/blog_list/`
export const login = () => `${baseUrl}login/`
export const editUser = (id) => `${baseUrl}users/${id}/`
