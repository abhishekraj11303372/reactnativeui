import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const userAuthApi = createApi({
  reducerPath: 'userAuthApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://10.0.2.2:8000/api/user/' }),
  endpoints: (builder) => ({
    registerUser:builder.mutation({
        query:(user)=> {
            return {
                url: 'register',
                method: 'POST',
                body: user,
                headers: {
                    'Content-type': 'application/json',

                }
            }
        }
    }),
    loginUser:builder.mutation({
      query:(user)=> {
          return {
              url: 'login',
              method: 'POST',
              body: user,
              headers: {
                  'Content-type': 'application/json',

              }
          }
      }
  }),
  getLoggedUser:builder.query({
    query:(token)=> ({
      url: 'loggeduser',
            method: 'GET',
            headers: {
                'authorization': `Bearer ${token}`,
            },
    })
})
  }),
})

export const { useRegisterUserMutation,useLoginUserMutation,useGetLoggedUserQuery } = userAuthApi