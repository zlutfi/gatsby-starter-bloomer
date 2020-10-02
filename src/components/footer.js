import React from "react"
import { Footer, Container, Content, Icon } from "bloomer"

const MainFooter = () => {
  return (
    <Footer>
      <Container>
        {/* Built by ZLI */}
        <Content>
          <p>
            Made with{" "}
            <Icon hasTextColor="danger" className="fa fa-heart"></Icon> by{" "}
            <a
              href="https://zlutfi.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              ZLI
            </a>
          </p>
        </Content>
        {/* Built with Gatsby, Bulma, and Bloomer */}
        <Content isSize="small">
          <p>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a
              href="https://www.gatsbyjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Gatsby
            </a>
            ,{" "}
            <a
              href="https://bulma.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bulma
            </a>{" "}
            and{" "}
            <a
              href="https://bloomer.js.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bloomer Components
            </a>{" "}
          </p>
        </Content>
      </Container>
    </Footer>
  )
}

export default MainFooter
