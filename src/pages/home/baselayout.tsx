import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Frame from '../../assets/images/Frame.png'
import Dashboard from '../../assets/images/dashboard.png'
import RegisterUsers from '../../assets/images/register-users.png'
import Plans from '../../assets/images/plans.png'
import Specialities from '../../assets/images/specialities.png'
import Notification from '../../assets/images/notifications.png'
import Faq from '../../assets/images/faq.png'
import {
  BaseDiv,
  Logo,
  Menu,
  MenuText,
  SecondDiv
} from '@/assets/styles/home/menu'
import { Header } from '@/components/user/header'

export default function BaseLayout() {
  return (
    <BaseDiv>
      <Menu>
        <nav>
          <Logo>
            <img src={Frame} alt="Logo" />
          </Logo>
          <ul>
            <MenuText>
              <Link to="/" className="menu-link">
                <img src={Dashboard} className="menu-icon" />
                Dashboard
              </Link>
            </MenuText>
            <MenuText>
              <Link to="/usuarios" className="menu-link">
                <img src={RegisterUsers} className="menu-icon" />
                Usuarios cadastrados
              </Link>
            </MenuText>
            <MenuText>
              <Link to="/planos" className="menu-link">
                <img src={Plans} className="menu-icon" />
                Planos
              </Link>
            </MenuText>
            <MenuText>
              <Link to="/especialidades" className="menu-link">
                <img src={Specialities} className="menu-icon" />
                Especialidades
              </Link>
            </MenuText>
            <MenuText>
              <Link to="/notificacoes" className="menu-link">
                <img src={Notification} className="menu-icon" />
                Notificações
              </Link>
            </MenuText>
            <MenuText>
              <Link to="/faq" className="menu-link">
                <img src={Faq} className="menu-icon" />
                FAQ
              </Link>
            </MenuText>
          </ul>
        </nav>
      </Menu>
      <SecondDiv>
        <Header />
        <Outlet />
      </SecondDiv>
    </BaseDiv>
  )
}
