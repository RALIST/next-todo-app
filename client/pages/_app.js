import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ApiService from "../services/api_service";
import {ApiProvider} from "../components/api-context";
import React from 'react'

function MyApp({ Component, pageProps }) {
  const apiService = new ApiService()

  return (
    <ApiProvider value={apiService}>
      <Component {...pageProps} />
    </ApiProvider>
  )

}

export default MyApp
