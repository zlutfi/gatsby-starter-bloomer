import React from "react"
import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"
import {
  Section,
  Container,
  Title,
  Column,
  Content,
  Button,
  Icon,
} from "bloomer"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"

const IndexPage = ({ data }) => {
  const page = data.site.siteMetadata
  return (
    <Layout>
      <SEO title="Home" />
      <Hero siteTitle={page.title} description={page.description} />
      <Section>
        <Container>
          {/* Intro section  */}
          <Column isSize="2/3">
            <Title>Welcome to your Gatsby site</Title>
            <Content>
              <p>
                This barebones starter ships with the main{" "}
                <strong>Gatsby + Bloomer</strong> configuration files you might
                need. Configured with only the <strong>bare minimums</strong>{" "}
                needed to get your site started.
              </p>
              {/* List of features */}
              <ul id="list-unstyled">
                <li>
                  <Icon
                    className="fab fa-sass fa-lg has-text-primary"
                    id="feature-icon"
                  />
                  Sass Ready
                </li>
                <li>
                  <Icon
                    className="fas fa-icons fa-lg has-text-primary"
                    id="feature-icon"
                  />
                  Font Awesome Icons
                </li>
                <li>
                  <Icon
                    className="fas fa-tachometer-alt fa-lg has-text-primary"
                    id="feature-icon"
                  />
                  Progressive Web App
                </li>
                <li>
                  <Icon
                    className="fas fa-caret-square-down fa-lg has-text-primary"
                    id="feature-icon"
                  />
                  Sticky Footer
                </li>
              </ul>
              {/* Navigate to page 2 */}
              <p>
                <Link to="/page-2/">
                  <Button
                    isColor="primary"
                    className="is-rounded"
                    id="btn-spaced"
                  >
                    <span>Go to page 2</span>
                    <Icon className="fa fa-arrow-right fa-sm" />
                  </Button>
                </Link>
              </p>
            </Content>
          </Column>

          {/* Features section begins */}
        </Container>
      </Section>
    </Layout>
  )
}

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
