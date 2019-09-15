import React from "react"
// import PropTypes from "prop-types"
import { Footer, Container, Content, Columns, Column } from "bloomer"

const MainFooter = () => {
  return (
    <Footer id="footer">
      <Container>
        <Content>
          <Columns>
            <Column isFull>
              <p>
                Made with{" "}
                <a
                  href="https://bloomer.js.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Bloomer Components
                </a>
              </p>
            </Column>
          </Columns>
          <Content isSize="small">
            <p>
              The source code is licensed under{" "}
              <a
                href="http://opensource.org/licenses/mit-license.php"
                target="_blank"
                rel="noopener noreferrer"
              >
                MIT
              </a>
              .
            </p>
            <p>
              The website content is licensed under{" "}
              <a
                href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
                target="_blank"
                rel="noopener noreferrer"
              >
                CC ANS 4.0
              </a>
              .
            </p>
            <p>
              © {new Date().getFullYear()}, Built with
              {` `}
              <a href="https://www.gatsbyjs.org">Gatsby</a> and{" "}
              <a href="https://bulma.io">Bulma</a> by ZL
            </p>
          </Content>
        </Content>
      </Container>
    </Footer>
  )
}

// Footer.propTypes = {}

export default MainFooter
