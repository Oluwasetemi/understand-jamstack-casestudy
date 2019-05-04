import React from 'react'
import styled from 'styled-components'
import { FaExternalLinkSquareAlt, FaTwitter } from 'react-icons/fa'

import Link from './link'
import Fit from './fit'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  bottom: 0;
  background-color: white;
  color: black;

  width: 100%;
  padding: 1rem;
`

const LinkIcon = styled(FaExternalLinkSquareAlt)`
  margin-right: 1rem;
`

const TwitterIcon = styled(FaTwitter)`
  margin-left: 1rem;
`

export default function Banner({ children = 'oluwasetemi.github.io', twitter = false }) {
  return (
    <Container>
      <Fit max={48}>
      <LinkIcon />
      {children}
      {twitter && (
        <Link href="https://twitter.com/setemiojo">
          <TwitterIcon /> @setemiojo
        </Link>
      )}
      </Fit>
    </Container>
  )
}