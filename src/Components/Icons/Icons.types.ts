import * as React from 'react'
import { SxStyleProp } from 'theme-ui'

export type Icon = React.FC<IconProps>

export type IconProps = {
  className?: string
  focusable?: boolean
  sx?: SxStyleProp
}
