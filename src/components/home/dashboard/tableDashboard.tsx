import {
  DivForTable,
  DivForTitleOnTable,
  Table,
  TitleForTableDashboard
} from '@/assets/styles/home/dashboard/tableDashboard'
import { Link } from 'react-router-dom'
import { GetLastUsers } from '@/config/servicies'
import { useEffect, useState } from 'react'
import { TableComponent } from '@/components/table/table'

export const TableDashboard = () => {
  const HeadColumns = ['Usuário', 'E-mail', 'WhatsApp', 'Tipo de usuário']

  const [userData, setUserData] = useState([])
  const [userDataProcessed, setUserDataProcessed] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await GetLastUsers()
        if (userData) {
          setUserData(userData.content)
          let dataTemp:any = []
          userData.content.forEach((item: any) => {
            dataTemp.push( {
              user: item.name,
              email: item.email,
              whatsapp: item.phone,
             // specialty: item.specialties.lenght > 0 ? item.specialties[0].name : '',
             // city: item?.address?.city,
              //uf:  item?.address?.uf,
              userType: item.profiles.length > 0 ? item.profiles[0].name : '',
            })
          })
          setUserDataProcessed(dataTemp);
          console.log(userData.content)
        }
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <>
      <DivForTable>
        <DivForTitleOnTable>
          <TitleForTableDashboard>
            Últimos usuários cadastrados
          </TitleForTableDashboard>
          <p>Ver tudo</p>
        </DivForTitleOnTable>
        <TableComponent
          HeadColumns={HeadColumns}
          BodyRow={userDataProcessed}
          // BodyRow={userData.map(user => ({
          //   firstname: `${user.firstName} ${user.lastName}`,
          //   email: `${user.email}`,
          //   phone: `${user.phone}`
          // }))}
        />
      </DivForTable>
    </>
  )
}
