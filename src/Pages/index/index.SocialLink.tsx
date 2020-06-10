/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Icon as IconType } from '../../Components/Icons/Icons.types'

type Props = {
  href: string
  Icon: IconType
}

const SocialLink = ({ href, Icon }: Props): JSX.Element => (
  <a
    data-testid="SocialLink"
    sx={{ display: 'inline-block', color: 'text' }}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    <Icon
      data-testid="SocialLink-Icon"
      sx={{ display: 'block', fill: 'white', width: 'icon.2' }}
    />
  </a>
)

export default SocialLink
