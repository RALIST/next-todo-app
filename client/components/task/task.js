

const Task = ({task, toggleDone, toggleImportant, deleteTask}) => {

	const { id, name, created_at, done, important}	= task;

	let classNames = 'row py-3 align-items-center border border-bottom '
	if (important) {
		classNames += ' font-weight-bold'
	}
	if (done) {
		classNames += ' del'
	}

	return(
		<div className={ classNames }>
			<div className="col-1">{id}</div>
			<div className='col-6'>{name}</div>
			<div className='col-2'>{new Date(created_at).toDateString()}</div>
			<ActionButtons id={id}
										 toggleDone={toggleDone}
										 toggleImportant={toggleImportant}
											deleteTask={deleteTask}/>
		</div>
	)
}

const ActionButtons = ({toggleImportant, toggleDone, deleteTask,id}) => {
	return(
		<div className='col-3'>
			<button className='btn btn-success mx-2'
							title='Mark as Done'
							onClick={() => toggleDone(id)}
							>
				<svg style={{width: '1.2rem', height: '1.2rem'}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
				</svg>
			</button>

			<button className='btn btn-warning mx-2'
							title='Mark as Important'
							onClick={() => toggleImportant(id)}
							>
				<svg style={{width: '1.2rem', height: '1.2rem'}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
				</svg>
			</button>

			<button className='btn btn-danger d-inline mx-2'
							title='Delete task'
							onClick={() => deleteTask(id)}
							>
				<svg style={{width: '1.2rem', height: '1.2rem'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
					<path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
				</svg>
			</button>

		</div>
	)
}

export default Task;
