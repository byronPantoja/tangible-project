import Link from './Link'
const MapNavList = (item) => {
  return (
    <li key={item.name} className="flow-root">
      <Link
        href={item.href}
        className="-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 hover:bg-gray-50"
      >
        <item.icon className="h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true" />
        <span className="ml-4">{item.name}</span>
      </Link>
    </li>
  )
}

export default MapNavList
