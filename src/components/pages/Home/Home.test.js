/* eslint-disable no-undef */

import React from 'react'

import { render } from '@testing-library/react'

import Home from './Home'

test('renders learn react link', () => {
  const { getByText } = render(<Home />)
  const linkElement = getByText('HOME')

  expect(linkElement).toBeInTheDocument()
})
