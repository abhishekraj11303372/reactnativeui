import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const userAuthApi = createApi({
  reducerPath: 'userAuthApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://10.0.2.0:8000/api/user/' }),
  endpoints: (builder) => ({
    registerUser:builder.mutation({
        query:(user)=> {
            return {
                url: 'register',
                method: 'post',
                body: user,
                headers: {
                    'Content-type': 'application/json',

                }
            }
        }
    })
  }),
})

export const { useRegisterMutation } = pokemonApi