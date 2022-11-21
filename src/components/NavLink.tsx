import { useRouter } from 'next/router'
import Link from 'next/link'
import PropTypes from 'prop-types'

export function NavLink({ href, children, ...props }: any) {
  const { pathname } = useRouter()
  const currentRoute = pathname

  const isActive = currentRoute === href ? 'active' : 'inactive'

  return (
    <Link href={href} className={isActive}>
      {children}
    </Link>
  )
}
