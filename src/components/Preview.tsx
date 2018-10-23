import * as React from 'react'

export interface PreviewProps {
  firstName?: string
  lastName?: string
  email?: string
}

export const Preview = (props: PreviewProps) => (
  <div>
    <p>First Name: {props.firstName}</p>
    <p>Last Name: {props.lastName}</p>
    <p>E-mail: {props.email}</p>
  </div>
)
