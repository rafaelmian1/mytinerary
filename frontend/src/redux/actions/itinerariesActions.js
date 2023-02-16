import apiClient from '@api/client'
import { toast } from 'react-toastify'

const itinerariesActions = {
  getItineraries: (props) => {
    return async (dispatch) => {
      try {
        let response = await apiClient.get(
          '/itineraries/' + props.match.params.id
        )
        if (!response.data.success) {
          throw new Error(response.data.response)
        }
        dispatch({ type: 'GET_ITINERARIES', payload: response.data.response })
        return { success: true }
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
      }
    }
  },
  sortItineraries: (value) => {
    return (dispatch) => {
      dispatch({ type: 'SORT_ITINERARIES', payload: value })
    }
  },
  resetState: () => {
    return (dispatch) => {
      dispatch({ type: 'RESET' })
    }
  },
}
export default itinerariesActions
