import { Link } from 'remix'
import { useRootContext } from '~/context'

export default function Index() {
  const { data } = useRootContext()
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}>
      <h1>Welcome to Remix</h1>
      <p>Name from root data: name - {data.name}</p>

      <Link to="/data">
        <button>View root data</button>
      </Link>
    </div>
  )
}
