import apiClient from '@api/client'
import { toast } from 'react-toastify'

const carouselActions = {
  getSlides: (props) => {
    return async (dispatch) => {
      try {
        let response = await apiClient.get('/carousel')
        if (!response.data.success) {
          throw new Error(response.data.response)
        }
        dispatch({ type: 'GET_SLIDES', payload: response.data.response })
      } catch (err) {
        toast.error("We're doing some maintenance, please try later!", {
          position: 'top-right',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        })
        console.error(err.message)
        props.history.push('/error')
      }
    }
  },
}

export default carouselActions
