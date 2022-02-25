import { CheckCircleIcon, PhoneIcon, PlayIcon } from '@heroicons/react/outline'

const callsToAction = [
  {
    name: 'Watch Demo',
    href: 'https://player.vimeo.com/video/659875234?h=1980ccb4fb&autoplay=1&loop=1&title=0&byline=0&portrait=0',
    icon: PlayIcon,
  },
  { name: 'View Samples', href: '/samples', icon: CheckCircleIcon },
  { name: 'Contact Us', href: '/contact', icon: PhoneIcon },
]

module.exports = callsToAction
