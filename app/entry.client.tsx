import { hydrate } from 'react-dom'
import { RemixBrowser } from 'remix'
import { RootContext } from './context'

hydrate(
  <RootContext.Provider
    value={{
      data: JSON.parse(document.getElementById('initial-data')!.innerHTML),
    }}
  >
    <RemixBrowser />
  </RootContext.Provider>,
  document,
)
