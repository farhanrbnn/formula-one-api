import request from '../service'

class DataService {
  create (data) {
    return request.post('api/post', data)
  }
}
export default new DataService()
