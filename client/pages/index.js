import TasksList from "../components/tasks_list/tasks_list";
import ApiService from "../services/api_service";
import { Component } from "react";

class Home extends Component {

	state = {tasks: this.props.initTasks}

	render(){
		return (
			<div className="container-fluid">
				<div className='container mt-3'>
					<div className="row bg-info text-white px-5">
						<h1 className='h2 inline'>
							Chucker
							<small className='ml-2'>
								 | The only way to become Chuck Norris
							</small>
						</h1>

					</div>
					<TasksList tasks = {this.state.tasks} />
				</div>
			</div>
		)
	}

}

export const getStaticProps = async () => {
	const req = await new ApiService().getTasks()
	return {
		props: {
			initTasks: req
		}
	}
}


export default Home
