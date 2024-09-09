// All switch cases, repetitive functions comes to this helper files.
export function getRoutes(roleId) {
  let route
  switch (roleId) {
    case '1':
      route = '/admin'
      break
    case '2':
      route = '/user'
      break
  }
  return route
}
