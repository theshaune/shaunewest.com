// import * as React from 'react'
/** @jsx jsx */
import { jsx, SxStyleProp } from 'theme-ui'

type Props = {
  className?: string
  focusable?: boolean
  sx?: SxStyleProp
}

const StackOverflowIcon = ({
  focusable = false,
  className,
}: Props): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 120 120"
    role="img"
    focusable={focusable}
    className={className}
  >
    <title>Stack Overflow Icon</title>
    <path d="M84.4 93.8V70.6h7.7v30.9H22.6V70.6h7.7v23.2z" />
    <path d="M38.8 68.4l37.8 7.9 1.6-7.6-37.8-7.9-1.6 7.6zm5-18l35 16.3 3.2-7-35-16.4-3.2 7.1zm9.7-17.2l29.7 24.7 4.9-5.9-29.7-24.7-4.9 5.9zm19.2-18.3l-6.2 4.6 23 31 6.2-4.6-23-31zM38 86h38.6v-7.7H38V86z" />
  </svg>
)

export default StackOverflowIcon
