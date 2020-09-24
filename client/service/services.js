import request from "../service"

class dataService{
	getAll(){
		return request.get("/api");
	},

	getById(id){
		return request.get('api/${id}');
	},

	create(data){
		return request.post('api/post', data);
	}
}

export default new dataService();