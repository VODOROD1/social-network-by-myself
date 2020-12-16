import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY' : '7113d2d2-3e34-4319-830f-bae42e4abf64'
  }
})

export const authAPI = {
  authMe: function() { 
    return instance.get('auth/me')
                  .then(response => response.data)
  },
  login(email, password, rememberMe) {
    return instance.post('auth/login', {
      email, password, rememberMe
    }).then(response => {
        return response.data})
  },
  logout() {
    return instance.delete('auth/login')
      .then(response => response.data) 
  }
}

export const userAPI = {
  getUser: function() {

  },
  getUsers: function(currentPage) { // получаем профили пользователей из диапазона
    return instance.get('users' + `?cont=5&page=${currentPage}`)
                  .then(response => response.data)
  },
  getTotalCount: function() {
    return instance.get('users')
                  .then(response => response.data)
  },
  getUser: function(userId) {
    return instance.get('profile/' + userId)
                .then(response => response.data)
  },
  follow: function(userId) {
    return instance.post('follow' + `/${userId}`)
                   .then(response => response.data)
  },
  unfollow: function(userId) {
    return instance.delete('follow' + `/${userId}`)
                  .then(response => response.data)
  },
}

export const profileAPI = {
  updateStatus: function(status) {
    return instance.put('profile/status/',{status})
                    .then(response => response.data)
  },
  getStatus: function(userId) {
    return instance.get('profile/status/'+ userId)
                  .then(response => response.data)
  } 
}