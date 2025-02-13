import styled from "styled-components";
import { Link } from "react-router-dom";

// export for use in other components
export const Container = styled.div`
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 20px;
`

export const Navbar = styled.nav`
    background-color: #333;
    height: 50px;
`

export const NavCon = styled.nav`
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Logo = styled(Link)`
    color: #fff;
    font-size: 1.2rem;
    font-weight: bold;
    text-decoration: none;
`
export const Menu = styled.ul`
    display: flex;
    list-style: none;

    li {
        margin: 0 1rem;
        a {
            color: #fff;
            text-decoration: none;
        }
    }
`

export const HomeLayout = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1.5rem 0;
`

export const SkillsCom = styled.ul`
    display: flex;
    jusitfy-content: center;
    list-style: none;

    li {
        margin: 1rem;
        background: #333;
        color: #fff;
        padding: 1rem;
        border-radius: 5px;

        strong {
            color: #ffc14f;
        }
    }
`

export const FooterCom = styled.footer`
    text-align: center;
    background: #333;
    color: #fff;
    position: fixed;
    bottom: 0;
    width: 100%;
`

