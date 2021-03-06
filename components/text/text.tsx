import * as React from "react"
import { Text as ReactNativeText } from "react-native"

import { presets } from "./text.presets"
import { TextProps } from "./text.props"
import { mergeAll, flatten } from "lodash/fp"

/**
 * For your text displaying needs.
 *
 * This component is a HOC over the built-in React Native one.
 */
export function Text(props: TextProps) {
  // grab the props
  const {
    preset = "default",
    tx,
    text,
    children,
    style: styleOverride,
    txOptions,
    ...rest
  } = props

  // figure out which content to use
  const content = text || children

  const style = mergeAll(
    flatten([presets[preset] || presets.default, styleOverride])
  )

  return (
    <ReactNativeText {...rest} style={style}>
      {content}
    </ReactNativeText>
  )
}
