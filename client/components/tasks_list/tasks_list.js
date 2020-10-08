import Task from "../task";
import {Component, Fragment } from "react";
import withApi from "../hoc";
import Navbar from "../navbar";


class TasksList extends Component {

	state = { tasks: this.props.tasks, filter: 'all' }

	toggleDone = async (id) => {
		this.changeProperty(id, 'done') };

	toggleImportant = (id) => {
		this.changeProperty(id, 'important') };

	deleteTask = async (id) => {
		await this.props.apiService.deleteTask(id)
		this.setState(({tasks}) => {
			const new_tasks = tasks.filter((el) => el.id !== id)
			return {tasks: new_tasks}
		})
	}

	addTask = async (data) => {
		const newItem = await this.props.apiService.addTask(data)
		this.setState(({tasks}) => {
			const new_data = [newItem,...tasks]
			return {
				tasks: new_data
			}
		})
	}

	changeProperty = async (id, property) => {
		const apiService = this.props.apiService
		const item = this.state.tasks.find((task) => task.id === id)
		const data = {
			[property]: !item[property]
		}
		const newItem = await apiService.updateTask(item, data)

		this.setState((state) => {
			const tasks = state.tasks
			const idx = tasks.findIndex((el) => el.id === id)
			let new_state = [...tasks]
			new_state[idx] = newItem
			return {
				tasks: new_state
			}
		})
	}

	onFiltered = (new_filter) => {
		this.setState((state) => {
			return {
				filter: new_filter
			}
		})
	}

	filter = (items, filter) => {
    switch(filter) {
      case 'all':
        return items;
      case 'done':
        return items.filter((el) => el.done)
      case 'active':
        return items.filter((el) => !el.done)
      default:
        return items;
    }
  }

	render(){
		const tasks = this.filter(this.state.tasks, this.state.filter)
		const filtered = tasks.map((task) => (
			<Task task={task} key={task.id}
						toggleDone={this.toggleDone}
						toggleImportant={this.toggleImportant}
						deleteTask={this.deleteTask}/>
		))
		return (
			<Fragment>
				<Navbar filter = {this.state.filter}
								onFiltered = {this.onFiltered}
								addTask={this.addTask}/>
				{
					[...filtered]
				}
			</Fragment>
		)
	}
}

export default withApi()(TasksList)
