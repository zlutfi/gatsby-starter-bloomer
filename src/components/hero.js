import React, { Component } from "react"
import { Hero, HeroBody, Container, Title, Button } from "bloomer"

export default class hero extends Component {
  render() {
    return (
      <Hero isColor="primary" isSize="medium">
        <HeroBody>
          <Container hasTextAlign="centered">
            <Title>{this.props.description}</Title>
            <Button
              isColor="white"
              isOutlined
              href="https://github.com/zlutfi/gatsby-starter-bloomer"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Now
            </Button>
          </Container>
        </HeroBody>
      </Hero>
    )
  }
}