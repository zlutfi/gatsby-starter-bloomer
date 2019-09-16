import React from "react"
import { Footer, Container, Content, Columns, Column, Icon } from "bloomer"

const MainFooter = () => {
  return (
    <Footer>
      <Container>
        <Content>
          <Columns>
            <Column>
              <p>
                Made with{" "}
                <Icon hasTextColor="danger" className="fa fa-heart"></Icon> by{" "}
                <a
                  href="https://zlicreative.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ZLI Creative
                </a>
              </p>
            </Column>
          </Columns>
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
        </Content>
      </Container>
    </Footer>
  )
}

export default MainFooter
