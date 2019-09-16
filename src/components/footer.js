import React from "react"
import { Footer, Container, Content, Columns, Column, Icon } from "bloomer"

const MainFooter = () => {
  return (
    <Footer id="footer">
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
