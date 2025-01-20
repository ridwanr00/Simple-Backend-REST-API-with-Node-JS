import axios from 'axios'

const baseApiUrl = 'http://localhost:4000'

const createUser = async (payload) => {
  const createUserEndpoint = `${baseApiUrl}/v1/user`

  const { data: apiResponse } = await axios.post(
    createUserEndpoint,
    payload
  )

  return apiResponse
}

const retrieveUser = async (userId) => {
  const getUserEndpoint = `${baseApiUrl}/v1/user/${userId}`
  const { data: apiResponse } = await axios.get(getUserEndpoint)
  return apiResponse
}

const retrieveAllUsers = async () => {
  const getAllUsersEndpoint = `${baseApiUrl}/v1/user/all`
  const { data: apiResponse } = await axios.get(getAllUsersEndpoint)

  console.log(apiResponse)
  return apiResponse
}

export default {
  createUser,
  retrieveUser,
  retrieveAllUsers
}
