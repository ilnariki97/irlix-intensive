import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const mockApi = createApi({
    reducerPath: 'mockApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://62dfb1dc976ae7460bf172d5.mockapi.io/irlix-pub'}),
    endpoints: (builder) => ({
        getDrinks: builder.query({
            query: (filter) => {
                const stringFilter = filter === 'все' ? '' : `?filter=${filter}`
                return `/drinks${stringFilter}`
            }, // /drinks?filter=filter
               // /drinks?search=text
        }),
    })
})
export const { useGetDrinksQuery } = mockApi;
