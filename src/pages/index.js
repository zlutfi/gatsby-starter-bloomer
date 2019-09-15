import React from "react"
import { Link } from "gatsby"
import { Section, Container, Title, Subtitle, Button } from "bloomer"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Hero from "../components/hero"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <body>
      <Section>
        <Container>
          <Title>Hi people</Title>
          <Subtitle>
            Welcome to your new Gatsby site. Now go build something{" "}
            <strong>great</strong>.
          </Subtitle>
          <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
            <Image />
          </div>
          <Link to="/page-2/">
            <Button isColor="primary" isOutlined>
              Go to page 2
            </Button>
          </Link>

          {/* <Link to="/page-2/">Go to page 2</Link> */}
        </Container>
      </Section>
    </body>
  </Layout>
)

export default IndexPage
