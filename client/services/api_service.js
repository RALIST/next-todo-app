export default class ApiService {

	async getTasks() {
		const response = await fetch('http://localhost:3001/api/v1/tasks')
		return await response.json()
	}

	updateTask = async (task, data) => {
		const res = await fetch(`http://localhost:3001/api/v1/tasks/${task.id}`, {
			headers: {
				'Content-Type': 'application/json'
			},
			method: 'PUT',
			body: JSON.stringify({
				task: data
			})
		})
		return await res.json()
	}

	deleteTask = async (id) => {
		const res = await fetch(`http://localhost:3001/api/v1/tasks/${id}`,
			{
				headers: {
					'Content-Type': 'application/json'
				},
				method: 'DELETE'
		})
	}

	addTask = async (data) => {
		const res = await fetch(`http://localhost:3001/api/v1/tasks`, {
			headers: {
				'Content-Type': 'application/json'
			},
			method: 'POST',
			body: JSON.stringify({
				task: data
			})
		})
		return await res.json()
	}

}
