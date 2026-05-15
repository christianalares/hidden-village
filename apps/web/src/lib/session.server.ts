import { auth } from '@hidden-village/auth'
import { getRequest } from '@tanstack/react-start/server'

export async function fetchSession() {
  const request = getRequest()
  return auth.api.getSession({ headers: request.headers })
}
