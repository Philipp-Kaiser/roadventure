import Link from 'next/link'

export default function Navbar(): JSX.Element {
  const pages = [
    { title: 'home', path: '/' },
    { title: 'map', path: '/map' },
    { title: 'roadtrips', path: '/roadtrips' },
    { title: 'travellist', path: '/travellist' },
  ]

  return (
    <header>
      <nav>
        <ul>
          {pages.map((page, i) => (
            <li key={i}>
              <Link href={page.path}>
                <a>{page.title.toUpperCase()}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
