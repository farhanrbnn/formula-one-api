import request from '../service'

class DataService {
  create (data) {
    return request.post('api/post', data)
  }
  getAll () {
    return request.get('/api')
  }
}
export default new DataService()
