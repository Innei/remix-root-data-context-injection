import { LoaderFunction, useLoaderData } from 'remix'

export const loader: LoaderFunction = async () => {
  return [{ title: 'Hello World', body: 'Hello World' }]
}
export default function Posts() {
  const data = useLoaderData<{ title: string; body: string }[]>()
  console.log(data)

  return data.map(({ title, body }) => (
    <div key={title}>
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  ))
}
