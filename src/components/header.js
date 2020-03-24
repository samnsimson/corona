import PropTypes from "prop-types"
import React, { useState } from "react"
import Image from "./image"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from "reactstrap"

const Header = ({ siteTitle }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)
  return (
    <div>
      <Navbar color="light" light expand="md">
        <Container>
          <NavbarBrand href="/">
            <Image />
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/information">Information</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/faq">FAQ's</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/whattoeat">What to eat?</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/helpline">Helpline</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
