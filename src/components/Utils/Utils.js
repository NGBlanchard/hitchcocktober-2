import React from 'react'
import { format as formatDate } from 'date-fns'
import './Utils.css'
 

export function NiceDate({ date, format='Do MMMM YYYY' }) {
  return formatDate(date, format)
}

export function Required({ className, ...props }) {
  return (
    <span className={['Required', className].join(' ')} {...props}>
      &#42;
    </span>
  )
}

export const required = value => {
  return value ? undefined : 'Required'
}

export const nonEmpty = value =>
  value.trim() !== '' ? undefined : 'Cannot be empty'

export const isTrimmed = value =>
  value.trim() === value ? undefined : 'Cannot start or end with whitespace'

  export const length = length => value => {
  if (length.min && value.length < length.min) {
    return `Must be at least ${length.min} characters long`
  }
  if (length.max && value.length > length.max) {
    return `Must be at most ${length.max} characters long`
  }
}

export const matches = field => (value, allValues) =>
  field in allValues && value.trim() === allValues[field].trim()
    ? undefined
    : 'Does not match'


    