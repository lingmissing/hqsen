import { injectReducer } from '../../store/reducers'
import AddHotel from './containers/AddHotelContainer'
import reducer from './modules/AddHotel'

export default (store) => ({
  path: 'add-hotel',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'AddHotel', reducer })

      /*  Return getComponent   */
      cb(null, AddHotel)

    /* Webpack named bundle   */
    }, 'AddHotel')
  }
})
