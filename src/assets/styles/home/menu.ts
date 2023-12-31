import styled from 'styled-components'

export const BaseDiv = styled.div`
  display: flex;
`

export const SecondDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  width: 18%;
  background: #046639;
  position: relative;
  //min-height: 100vh;
`

export const Logo = styled.div`
  height: 12.5vh;
  margin: 10%;
  padding-top: 10%;
  margin-bottom: 10%;
`

export const MenuText = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Poppins', sans-serif;
  font-size: 0.9rem;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.2px;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 1%;
  margin: 0.8%;
  /*margin-right: 1%;
  margin-top: 1%;
  margin-bottom: 1%;*/
  //width: 100vh;
  cursor: pointer;
  .menu-link {
    text-decoration: none;
    color: white;
    display: flex;
    align-items: center;
    padding: 8px;
    width: 100%;
    border-radius: 10px;
  }
  .menu-link:hover {
    background-color: #b4e08e; // Color de fondo al pasar el mouse
    color: #046639; // Color del texto al pasar el mouse
  }
  .menu-link .menu-icon {
    margin-right: 10%;
  }
`
