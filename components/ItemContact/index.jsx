import React from 'react'
import { Item, Icon, Text } from './style'

export default function ItemContact({ IconFa, href }) {
  return (
    <Item>
      <a href={href}>
      <Icon>
        <IconFa />
      </Icon>
      </a>
    </Item>
  )
}
