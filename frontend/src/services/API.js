import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const API = createApi({
    reducerPath: 'API',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/' }),
    endpoints: (builder) => ({
        registerUser: builder.mutation({
            query: (user) => {
                return {
                    url: 'registration/',
                    method: 'POST',
                    body: user,
                    headers: {
                        'Content-type': 'application/json',
                    }
                }
            }
        }),
        loginUser: builder.mutation({
            query: (user) => {
                return {
                    url: 'login/',
                    method: 'POST',
                    body: user,
                    headers: {
                        'Content-type': 'application/json',
                    }
                }
            }
        }),
        getAllDivision: builder.query({
            query: () => 'division/'
        }),
        getAllDistrict: builder.query({
            query: () => 'district/'
        }),
        getAllLocation: builder.query({
            query: () => 'location'
        }),
        getAllHotels: builder.query({
            query: () => 'hotel/'
        }),
        getAllResturant: builder.query({
            query: () => 'restaurant/'
        }),
        getAllAgency: builder.query({
            query: () => 'agency/'
        }),
    })
})


export const { 
    useRegisterUserMutation, 
    useLoginUserMutation,
    useGetAllDivisionQuery,
    useGetAllDistrictQuery,
    useGetAllLocationQuery,
    useGetAllHotelsQuery,
    useGetAllResturantQuery,
    useGetAllAgencyQuery,

} = API