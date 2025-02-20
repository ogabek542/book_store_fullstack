import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import getBaseUrl from "../../../utils/baseURL"

const baseQuery = fetchBaseQuery({
    baseUrl:`${getBaseUrl()/api/books}`,
    credentials:'include',
})

const bookApi = createApi({
    reducerPath:"bookApi",
    baseQuery:""
})
