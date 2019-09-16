import React from "react"
import { Link } from "gatsby"
import { Section, Container, Title, Subtitle, Button } from "bloomer"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <Section className="has-background-white">
      <Container>
        <Title>Hi from the second page</Title>
        <Subtitle>
          Welcome to page <strong>2</strong>
        </Subtitle>
        <Link to="/">
          <Button isColor="primary">Go back to the homepage</Button>
        </Link>
      </Container>
    </Section>
  </Layout>
)

export default SecondPage
