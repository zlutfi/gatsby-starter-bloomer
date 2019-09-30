import React, { Component } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import {
  Navbar,
  NavbarBrand,
  NavbarBurger,
  NavbarEnd,
  NavbarMenu,
  NavbarItem,
  Container,
  Icon,
  Button,
} from "bloomer"

export default class navbar extends Component {
  static propTypes = {
    siteTitle: PropTypes.string.isRequired,
  }
  state = {
    isOpen: false,
  }

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    return (
      <Navbar>
        <Container>
          {/* Site title link */}
          <NavbarBrand>
            <Link to="/" className="navbar-item">
              {this.props.siteTitle}
            </Link>
            <NavbarBurger
              isActive={this.state.isOpen}
              onClick={this.toggleCollapse}
            />
          </NavbarBrand>
          <NavbarMenu
            isActive={this.state.isOpen}
            onClick={this.toggleCollapse}
          >
            {/* Page nav links */}
            <NavbarEnd>
              <Link
                to="/"
                className="navbar-link nav-item is-arrowless"
                activeClassName="is-active"
              >
                Home
              </Link>
              <Link
                to="/page-2"
                activeClassName="is-active"
                className="navbar-link nav-item is-arrowless"
              >
                Page 2
              </Link>
              {/* Github download button */}
              <NavbarItem>
                <Button
                  href="https://github.com/zlutfi/gatsby-starter-bloomer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="is-rounded"
                  isSize="small"
                >
                  <span>Download on Github</span>
                  <Icon className="fab fa-github fa-sm" />
                </Button>
              </NavbarItem>
            </NavbarEnd>
          </NavbarMenu>
        </Container>
      </Navbar>
    )
  }
}
