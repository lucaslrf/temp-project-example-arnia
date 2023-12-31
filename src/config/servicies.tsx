import Api from '../Api'
import { AxiosResponse, isAxiosError } from 'axios'

export const GetUsersDashboard = async () => {
  try {
    const token = localStorage.getItem('token')
    const usersDashboard = await Api.get('/users/dashboard', {
      headers: { Authorization: token }
    })
    return usersDashboard.data
  } catch (error) {
    throw error
  }
}

export const GetLastUsers = async () => {
  try {
    const token = localStorage.getItem('token')
    const usersDashboard = await Api.get('/users', {
      headers: { Authorization: token }
    })
    return usersDashboard.data
  } catch (error) {
    throw error
  }
}

/*export const UpdateCard = async (
  id: string,
  data: UpdateType
): Promise<CardsType> => {
  try {
    const token = localStorage.getItem('token')
    const cardsFromId = await Api.put(`/api/card/${id}`, data, {
      headers: { Authorization: token }
    })
    return cardsFromId.data
  } catch (error) {
    throw error
  }
}*/

/*export const DeleteCard = async (id: string) => {
  try {
    const token = localStorage.getItem('token')
    const cardsFromId = await Api.delete(`/api/card/${id}`, {
      headers: { Authorization: token }
    })
    return cardsFromId.data
  } catch (error) {
    throw error
  }
}*/

type LoginApi = {
  token: string
  name: string
}

export const LoginPost = async (email: string, password: string) => {
  try {
    const userData: AxiosResponse<LoginApi> = await Api.post(
      `public/register/login?email=${email}&password=${password}`,
      {}
    )

    const token = userData.data.token
    //const userName = userData.data.name

    localStorage.setItem('token', token)
    return token
  } catch (error) {
    if (isAxiosError(error)) {
      if (error.status === 404) {
        return 'Usuário não encontrado'
      }
      if (error.status === 401) {
        return 'Senha incorreta'
      }
    }
  }
}
