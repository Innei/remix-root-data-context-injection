import { createContext, useContext } from 'react'

export type AggregateDataType = {
  name: string
}
export const RootContext = createContext<{ data: AggregateDataType }>({
  data: null,
})
export const useRootContext = () => useContext(RootContext)
