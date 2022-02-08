import { useState } from 'react'
import * as style from './App.styles'

import { Item } from './types/Item'
import { ListItem } from './components/ListITem'

function App() {
  const [list, setList] = useState<Item[]>([
    {id: 1, name: 'Read a book', done: false},
    {id: 1, name: 'Finalize presentarion', done: true}
  ])

  return (
   <style.Container>
     <style.Main>
        <style.Header>
          To Do List
        </style.Header>

        {
          list.map((item, index) => (
            <ListItem key={index} item={item} />
          ))
        }
     </style.Main>
   </style.Container>
  );
}

export default App;
