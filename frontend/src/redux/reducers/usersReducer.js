import apiClient from '../../api/client'

const usersReducer = (
  state = {
    countries: [],
    user: null,
    token: null,
  },
  action
) => {
  switch (action.type) {
    case 'GET_COUNTRIES':
      return {
        ...state,
        countries: action.payload
          .map((country) => {
            return {
              name: country.name.includes('(')
                ? country.name.slice(0, country.name.indexOf(' (')) +
                  country.name.slice(country.name.indexOf(')') + 1)
                : country.name,
            }
          })
          .filter((country) => country.name.length < 25),
      }
    case 'LOGGED_IN':
      if (!state.token) {
        const token = action.payload.token
        localStorage.setItem('token', token)
        apiClient.defaults.headers['Authorization'] = `Bearer ${token}`
      }
      return {
        ...state,
        user: action.payload.user,
      }

    case 'RESET_USER':
      localStorage.removeItem('token')
      return {
        ...state,
        user: null,
      }
    default:
      return state
  }
}

export default usersReducer
