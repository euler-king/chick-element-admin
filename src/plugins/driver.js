import Vue from 'vue'
import Driver from 'driver.js' // import driver.js
import 'driver.js/dist/driver.min.css' // import driver.js css

Vue.prototype.$createDriver = () => {
  return new Driver()
}
