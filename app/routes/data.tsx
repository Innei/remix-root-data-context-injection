import { useRootContext } from '~/context'

export default function Index() {
  const { data } = useRootContext()
  return <pre>{JSON.stringify(data)}</pre>
}
