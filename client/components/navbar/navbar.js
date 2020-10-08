import  {Component} from "react"

class Navbar extends Component {

	state = {name: ''}

	onLabelChange = (e) => {
		this.setState({name: e.target.value })
	}

	onSubmit =  async (e) => {
		e.preventDefault();
		if (this.state.name.length) {
			await this.props.addTask({name: this.state.name})
			this.setState({name: ''})
			console.log(this.state)
		}
	}

	render() {
		const buttons = [
			{value: 'all', label: 'All'},
			{value: 'done', label: 'Done'},
			{value: 'active', label: 'Active'}
		]
		const { filter, onFiltered } = this.props

		const applyFilter = (e) => {
			e.target.blur()
			onFiltered(e.target.value)
		}

		let classNames = 'btn btn-outline-secondary'
		return (
			<div className='row my-3'>
				<div className="btn-group">
					{
						buttons.map(({value, label}) => (
							<button
								value={value}
								className={filter === value ? classNames + ' active' : classNames}
								key={value}
								onClick = {applyFilter}>
								{label}
							</button>
						))
					}
				</div>
				<div className='mx-3'>
					<form className='form-inline' onSubmit={this.onSubmit}>
						<input type="text" className='form-control' placeholder='Task name...' onChange = { this.onLabelChange } value={this.state.name}/>
						<button type='submit' className='btn btn-success ml-1'>Add Task</button>
					</form>
				</div>
			</div>
		)
	}
}

export default Navbar;
