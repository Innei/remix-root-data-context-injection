import { renderToString } from 'react-dom/server'
import type { EntryContext } from 'remix'
import { RemixServer } from 'remix'
import { RootContext } from './context'

export default async function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext,
) {
  const aggregate = await Promise.resolve({ name: 'foo' })
  const markup = renderToString(
    <>
      {/* mount data */}
      <RootContext.Provider value={{ data: aggregate }}>
        {/* serialize data into dom */}
        <script
          id="initial-data"
          dangerouslySetInnerHTML={{ __html: `${JSON.stringify(aggregate)}` }}
          type="application/json"
        ></script>
        <RemixServer context={remixContext} url={request.url} />
      </RootContext.Provider>
    </>,
  )

  responseHeaders.set('Content-Type', 'text/html')

  return new Response('<!DOCTYPE html>' + markup, {
    status: responseStatusCode,
    headers: responseHeaders,
  })
}
