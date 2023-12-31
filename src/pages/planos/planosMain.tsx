import {
  DivForTable,
  Table
} from '@/assets/styles/home/dashboard/tableDashboard'
import {
  DivForTabs,
  DivMainTitle,
  EditButtonUniversal,
  GreenButtonForAdd,
  HeaderOnTable,
  MainTitle,
  MenuSelectFilter,
  Search,
  TabForSearchFilter
} from '@/assets/styles/home/stylesForMainTables/universalStylesForMain'
import SearchIcon from '../../assets/images/search.png'
import AddButton from '../../assets/images/add.png'
import EditButton from '../../assets/images/edit.png'
import DeleteButton from '../../assets/images/delete.png'
import VisualizerButton from '../../assets/images/visualize.png'

export const PlanosMain = () => {
  return (
    <>
      <div>
        <DivMainTitle>
          <MainTitle>Planos</MainTitle>
        </DivMainTitle>
        <DivForTabs>
          <TabForSearchFilter isActive={true}>
            <p>Todos</p>
            <div>100</div>
          </TabForSearchFilter>
          <TabForSearchFilter isActive={false}>
            <p>Contratante</p> <div>100</div>
          </TabForSearchFilter>
        </DivForTabs>
        <DivForTable>
          <HeaderOnTable>
            <Search>
              <input
                type="text"
                placeholder="  Pesquise uma palavra chave..."
              />
              <img src={SearchIcon} alt="search" />
            </Search>
            <GreenButtonForAdd>
              <img src={AddButton} />
              Novo Plano
            </GreenButtonForAdd>
          </HeaderOnTable>
          <Table>
            <thead>
              <tr>
                <th>Columna 1</th>
                <th>Columna 2</th>
                <th>Columna 3</th>
                <th>Columna 4</th>
                <th>Columna 5</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Fila 1, Columna 1</td>
                <td>Fila 1, Columna 2</td>
                <td>Fila 1, Columna 3</td>
                <td>Fila 1, Columna 4</td>
                <td>
                  <EditButtonUniversal>
                    <img src={VisualizerButton} />
                  </EditButtonUniversal>
                  <EditButtonUniversal>
                    <img src={EditButton} />
                  </EditButtonUniversal>
                  <EditButtonUniversal>
                    <img src={DeleteButton} />
                  </EditButtonUniversal>
                </td>
              </tr>
              <tr>
                <td>Fila 2, Columna 1</td>
                <td>Fila 2, Columna 2</td>
                <td>Fila 2, Columna 3</td>
                <td>Fila 2, Columna 4</td>
                <td>Fila 2, Columna 5</td>
              </tr>
              <tr>
                <td>Fila 3, Columna 1</td>
                <td>Fila 3, Columna 2</td>
                <td>Fila 3, Columna 3</td>
                <td>Fila 3, Columna 4</td>
                <td>Fila 3, Columna 5</td>
              </tr>
              <tr>
                <td>Fila 4, Columna 1</td>
                <td>Fila 4, Columna 2</td>
                <td>Fila 4, Columna 3</td>
                <td>Fila 4, Columna 4</td>
                <td>Fila 4, Columna 5</td>
              </tr>
            </tbody>
          </Table>
        </DivForTable>
      </div>
    </>
  )
}
