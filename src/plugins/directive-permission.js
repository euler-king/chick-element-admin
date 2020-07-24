import Vue from 'vue'

function checkPermission(el, binding, store) {
  const { value } = binding
  const currRoles = store.getters && store.getters.roles

  // if (!currRoles) {
  //   const { roles } = await store.dispatch('user/getInfo')
  //   currRoles = roles
  // }

  if (value && value instanceof Array && currRoles) {
    if (value.length > 0) {
      const permissionRoles = value

      const hasPermission = currRoles.some(role => {
        return permissionRoles.includes(role)
      })

      if (!hasPermission) {
        el.parentNode && el.parentNode.removeChild(el)
      }
    }
  } else {
    throw new Error(`need roles! Like v-permission="['admin','editor']"`)
  }
}

export default ({ app, store }) => {
  Vue.directive('permission', {
    inserted: (el, binding) => {
      checkPermission(el, binding, app.store)
    },
    update: (el, binding) => {
      checkPermission(el, binding, app.store)
    }
  })

  Vue.prototype.checkPermission = (value) => {
    if (value && value instanceof Array && value.length > 0) {
      const roles = store.getters && store.getters.roles
      const permissionRoles = value

      const hasPermission = roles.some(role => {
        return permissionRoles.includes(role)
      })
      return hasPermission
    } else {
      console.error(`need roles! Like v-permission="['admin','editor']"`)
      return false
    }
  }
}
