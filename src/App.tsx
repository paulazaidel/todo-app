import { useState } from 'react'
import * as style from './App.styles'

import { Item } from './types/Item'
import { ListItem } from './components/ListITem'
import { AddItem } from './components/AddItem'

function App() {
  const [list, setList] = useState<Item[]>([
    {id: 1, name: 'Read a book', done: false},
    {id: 1, name: 'Finalize presentarion', done: true}
  ])

  const handleAddItem = (itemName: string) => {
    let copyList = [...list]
    
    copyList.push({
      id: list.length + 1,
      name: itemName,
      done: false
    })

    setList(copyList)
  }

  return (
   <style.Container>
     <style.Main>
        <style.Header>
          To Do List
        </style.Header>

        <AddItem onEnter={handleAddItem}/>

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
