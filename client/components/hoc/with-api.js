import {ApiConsumer} from "../api-context";

const withApi = () => (Wrapped) => {
	return(props) => {
		return(
			<ApiConsumer>
				{
					(apiService) => {
						return(
							<Wrapped {...props} apiService={apiService}/>
						)
					}
				}
			</ApiConsumer>
		)
	}
}
export default withApi;
