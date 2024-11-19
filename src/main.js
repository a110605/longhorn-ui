import createHistory from 'history/createHashHistory'
import createLoading from 'dva-loading'
import dva from 'dva'

// 1. Initialize
const app = dva({
  ...createLoading(),
  history: createHistory({
    queryKey: false,
  }),
  onError() {
  },
})

// eslint-disable-next-line no-undef
DarkReader.enable({
  brightness: 100,
  contrast: 100,
  sepia: 10,
})

export default app
