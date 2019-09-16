import React from "react"
import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"
import {
  Section,
  Container,
  Title,
  Subtitle,
  Button,
  Columns,
  Column,
  Content,
  Tag,
} from "bloomer"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Hero from "../components/hero"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Hero
      siteTitle={data.site.siteMetadata.title}
      description={data.site.siteMetadata.description}
    />
    <Section className="has-background-white">
      <Container>
        <Columns>
          <Column isSize="2/3">
            <Title isSpaced>Hi people</Title>
            <Subtitle>
              Welcome to your new Gatsby site. This barebones starter ships with
              the main Gatsby + Bloomer configuration files you might need.
            </Subtitle>
            <Content>
              <Title isSize="5">
                This starter is configured for the following;
              </Title>{" "}
              <Tag isColor="light">Sass Ready</Tag>{" "}
              <Tag isColor="light">Font Awesome Icons</Tag>{" "}
              <Tag isColor="light">Progressive Web App</Tag>
            </Content>
            <Link to="/page-2/">
              <Button isColor="primary">Go to page 2</Button>
            </Link>
          </Column>
          <Column isSize="1/3">
            <Image />
          </Column>
        </Columns>
      </Container>
    </Section>
  </Layout>
)

IndexPage.propTypes = {
  site: PropTypes.shape({
    siteMetadata: PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
  }),
}
export default IndexPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
