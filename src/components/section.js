import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import Fade from 'react-reveal/Fade'

import { Container, Header, Paragraph, Img } from 'library/index'
import { rem, theme, phone } from 'library/utils'

const Background = styled.section`
  ${({ color }) => css`
    background: ${color};
  `}

  ${({ src }) => src && css`
    background: ${src.includes('blue') && theme.blue} url(${require('../' + src)});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  `}

  padding: ${({ padding }) => padding || '14vh 0'};
  display: flex;
  flex-direction: column;
`

const Wrapper = Container.extend`
  width: 60%;
  text-align: center;

  ${phone(css`
    width: 85%;
  `)}
`

const Text = ({ title, content, color }) => (
  <Container centrate>
    <Wrapper col>
      <Fade>
        <Header
          style={{ fontWeight: 'bold' }}
        >
          {title}
        </Header>
        <Fade delay={100}>
          {
            typeof content === 'string' ?
              <Paragraph
                color={color && color.paragraph}>
                {content}
              </Paragraph> :
              content
          }
        </Fade>
      </Fade>
    </Wrapper>
  </Container>
)

Text.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]).isRequired,
  color: PropTypes.object
}

const Image = ({ src }) => (
  <Container centrate style={{ marginTop: rem(40) }}>
    <Wrapper col>
      <Fade delay={200}>
        <Img
          src={require('../' + src)}
          alt="Hero image"
          draggable='false'
        />
      </Fade>
    </Wrapper>
  </Container>
)

Image.propTypes = {
  src: PropTypes.string.isRequired
}

const Section = ({ title, content, background, img, color, padding }) => (
  <Background
    padding={padding}
    src={background}
    color={color && color.background}
  >
    <Text
      title={title}
      content={content}
      color={color}
    />
    {img && <Image src={img} />}
  </Background>
)

Section.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]).isRequired,
  background: PropTypes.string,
  img: PropTypes.string,
  color: PropTypes.object,
  padding: PropTypes.string
}


export default Section
