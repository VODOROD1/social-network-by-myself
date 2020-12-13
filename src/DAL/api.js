import axios from 'axios'

export const userAPI = {
  getUser: function() {

  },
  getUsers: function(currentPage) { // получаем профили пользователей из диапазона
    return axios.get('https://social-network.samuraijs.com/api/1.0/' + 'users' + 
                    `?cont=5&page=${currentPage}`,
                    { withCredentials: true,
                      headers: {
                        'API-KEY': '8565e753-6e97-4932-982d-21a5dff22027'
                      }
                    }
                    )
                .then(response => response.data)
  },
  getTotalCount: function() {
    return axios.get('https://social-network.samuraijs.com/api/1.0' + '/users')
              .then(response => response.data)
  },
  follow: function(userId) {
    return axios.post('https://social-network.samuraijs.com/api/1.0/' + 'follow' + `/${userId}`,
                      {},
                      { withCredentials: true,
                        headers: {
                          'API-KEY': '8565e753-6e97-4932-982d-21a5dff22027'
                        }
                      }
              ).then(response => response.data)
  },
  unfollow: function(userId) {
    return axios.delete('https://social-network.samuraijs.com/api/1.0/' + 'follow' + `/${userId}`,
                  { withCredentials: true,
                    headers: {
                      'API-KEY': '8565e753-6e97-4932-982d-21a5dff22027'
                    }
                  }
                ).then(response => response.data)
  },


}

export const authAPI = {

}
