import axios from 'axios'

const baseApiUrl = 'http://localhost:4000/v1'

const createUser = async (payload) => {
  const createUserEndpoint = `${baseApiUrl}/user`

  const { data: apiResponse } = await axios.post(
    createUserEndpoint,
    payload
  )

  return apiResponse
}

const retrieveUser = async (userId) => {
  const getUserEndpoint = `${baseApiUrl}/user/${userId}`
  const { data: apiResponse } = await axios.get(getUserEndpoint)
  return apiResponse
}

const retrieveAllUsers = async () => {
  const getAllUsersEndpoint = `${baseApiUrl}/user/all`
  const { data: apiResponse } = await axios.get(getAllUsersEndpoint)

  return apiResponse
}

const editUser = async (userId, payload) => {
  const editUserEndpoint = `${baseApiUrl}/user/${userId}`

  const { data: apiResponse } = await axios.put(editUserEndpoint, payload)

  return apiResponse
}

const removeUser = async (userId) => {
  const removeUserEndpoint = `${baseApiUrl}/user/${userId}`

  const { data: apiResponse } = await axios.delete(removeUserEndpoint)

  return apiResponse
}

export default {
  createUser,
  retrieveUser,
  retrieveAllUsers,
  editUser,
  removeUser
}
