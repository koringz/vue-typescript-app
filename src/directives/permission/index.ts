import { DirectiveOptions } from "vue"
const checkPermission = (value: any) => {
  const per = ["1", "2", "3"]
  const index = per.indexOf(value)
  if (index > -1) {
    return true
  }
  return false
}

const permission: DirectiveOptions = {
  inserted(el, binding) {
    const vPermission = binding.value
    if (vPermission) {
      const hasPermission = checkPermission(vPermission)
      if (!hasPermission) {
        el.parentNode && el.parentNode.removeChild(el)
      }
    }
  }
}

export { permission }
