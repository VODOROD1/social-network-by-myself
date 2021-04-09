import * as axios from 'axios'

const api = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true, // withCredentials для того чтобы задать запрос не анонимно 
    headers: {
        'API-KEY': '7bc36001-d0b8-4d46-8484-6e2282831e38'
    }
})

export const usersAPI = {
    getUsers (pageSize,currentPage) {
        return api.get(`users?count=${pageSize}&page=${currentPage}`)
                .then((response) => {
                return response.data
            })
    },
    follow (id) {
        return api.post(`follow/${id}`,{})
                .then((response) => {
                    return response.data
                })
    },
    unfollow (id) {
        return api.delete(`follow/${id}`)
                .then((response) => {
                    return response.data
                })
    }
}

export const profileAPI = {
    getUser(userId) {
        return  this.getProfile(userId)
    },
    getProfile(userId) {
        return api.get(`profile/${userId}`)
                    .then((response) => {
                        return response.data
                    })
    },
    setProfileData(data) {
        return api.put('profile', data)
                    .then((response) => {
                        return response.data
                    })
    },
    getStatus(userId) {
        return api.get(`/profile/status/${userId}`)
            .then((response) => {
                return response.data
            })
    },
    updateStatus(newStatus) {
        return api.put(`/profile/status`,{
                status: newStatus
            })
                  .then((response) => {
                      return response.data.resultCode
                  })
    },
    savePhoto(photo) {
        let photoData = new FormData()
        photoData.append('image',photo)
        return api.put('profile/photo',photoData,{
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(data => {

                return data.data
            }
            )
    }
}

export const authAPI = {
    async authMe() {
        return await api.get('auth/me')
                .then(response => {
                    return response.data
                })
    },
    login(email,password,rememberMe) {
        return api.post('/auth/login',{email,password,rememberMe})
                .then((response) => {
                    return response.data
                })
    },
    logout() {
        return api.delete('/auth/login')
                .then((response) => {
                    return response.data
                })
    }
}