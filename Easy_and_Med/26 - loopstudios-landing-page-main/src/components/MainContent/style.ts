import styled from 'styled-components'

interface ImageBoxProps {
  mobileImage: string
  desktopImage: string
}

export const ImageBox = styled.div<ImageBoxProps>`
  background-image: ${props => {
    return `url(${props.mobileImage})`
  }};

  @media (min-width: 800px) {
    background-image: ${props => {
      return `url(${props.desktopImage})`
    }};
  }
`
