import React, { Component } from "react"
import { Link } from "gatsby"
import {
  Hero,
  HeroHeader,
  HeroBody,
  HeroFooter,
  Navbar,
  NavbarBrand,
  NavbarItem,
  NavbarBurger,
  NavbarMenu,
  NavbarEnd,
  Container,
  Title,
  Tab,
  Tabs,
  TabLink,
  TabList,
} from "bloomer"

export default class hero extends Component {
  render() {
    return (
      <Hero isColor="primary" isSize="medium">
        <HeroHeader>
          <Navbar>
            <NavbarBrand>
              <NavbarItem>Bloomer</NavbarItem>
              <NavbarBurger
              // isActive={this.state.isActive}
              // onClick={this.onClickNav}
              />
            </NavbarBrand>
            <NavbarMenu
            // isActive={this.state.isActive}
            // onClick={this.onClickNav}
            >
              <NavbarEnd>
                <Link
                  to="/"
                  className="navbar-link"
                  activeClassName="is-active"
                >
                  <NavbarItem hasDropdown={false}>Home</NavbarItem>
                </Link>
                <Link
                  to="/page-2"
                  activeClassName="is-active"
                  className="navbar-link"
                >
                  <NavbarItem hasDropdown={false}>Page 2</NavbarItem>
                </Link>
              </NavbarEnd>
            </NavbarMenu>
          </Navbar>
        </HeroHeader>

        <HeroBody>
          <Container hasTextAlign="centered">
            <Title>Title</Title>
          </Container>
        </HeroBody>

        <HeroFooter>
          <Tabs isBoxed isFullWidth>
            <Container>
              <TabList>
                <Tab isActive>
                  <TabLink>Overview</TabLink>
                </Tab>
                <Tab>
                  <TabLink>Grid</TabLink>
                </Tab>
                <Tab>
                  <TabLink>Element</TabLink>
                </Tab>
                <Tab>
                  <TabLink>Components</TabLink>
                </Tab>
                <Tab>
                  <TabLink>Layout</TabLink>
                </Tab>
              </TabList>
            </Container>
          </Tabs>
        </HeroFooter>
      </Hero>
    )
  }
}
