import axios from 'axios';


export const getDataAPI = async (url) =>{
	const res = await axios.get(`/api/${url}`,{
		headers:{
			'Content-Type': 'application/json',
		}
	});
	return res;
}


export const postDataAPI = async (url,post) =>{
	const res = await axios.post(`/api/${url}`,post);
	return res;
}


export const putDataAPI = async (url,post) =>{
	const res = await axios.put(`/api/${url}`,post);
	return res;
}



export const deleteDataAPI = async (url) =>{
	const res = await axios.delete(`/api/${url}`,{
		headers:{
			'Content-Type': 'application/json',
		}
	});
	return res;
}