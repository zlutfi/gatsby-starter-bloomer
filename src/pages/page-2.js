import React from "react"
import { Link } from "gatsby"
import { Section, Container, Title, Subtitle, Button } from "bloomer"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <body>
      <Section>
        <Container>
          <Title>Hi from the second page</Title>
          <Subtitle>
            Welcome to page <strong>2</strong>
          </Subtitle>
          <Link to="/">
            <Button isColor="primary" isOutlined>
              Go back to the homepage
            </Button>
          </Link>
          {/* <Link to="/">Go back to the homepage</Link> */}
        </Container>
      </Section>
    </body>
  </Layout>
)

export default SecondPage
