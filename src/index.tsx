import * as React from 'react'
import Avatar, { AvatarStyle } from './avatar'
import { default as PieceComponent } from './avatar/piece'

export interface Props {
  avatarStyle: string
  className?: string;
  style?: React.CSSProperties
  topType?: string
  accessoriesType?: string
  hairColor?: string
  facialHairType?: string
  facialHairColor?: string
  clotheType?: string
  clotheColor?: string
  graphicType?: string
  eyeType?: string
  eyebrowType?: string
  mouthType?: string
  skinColor?: string
  pieceType?: string
  pieceSize?: string
  viewBox?: string
}

export default class AvatarComponent extends React.Component<Props> {
  render () {
    const {
      avatarStyle,
      style,
      className,
      ...pieceProps
    } = this.props

    return (
      <Avatar
        avatarStyle={avatarStyle as AvatarStyle}
        style={style}
        className={className}
        {...pieceProps}
      />
    )
  }
}

export class Piece extends React.Component<Props> {
  render () {
    const { avatarStyle, style, pieceType, pieceSize, viewBox } = this.props
    return (
      <PieceComponent
        avatarStyle={avatarStyle as AvatarStyle}
        style={style}
        pieceType={pieceType}
        pieceSize={pieceSize}
        viewBox={viewBox}
      />
    )
  }
}
