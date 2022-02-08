import { useState } from 'react'
import * as style from './styles'

import { Item } from '../../types/Item'

type Props = {
    item: Item
}

export const ListItem = ({ item }: Props) => {
    const [isChecked, setIsChecked] = useState(item.done)

    return (
        <style.Container done={isChecked}>
            <input 
                type="checkbox" 
                checked={isChecked} 
                onChange={e => setIsChecked(e.target.checked)}
            />
            <label>{item.name}</label>
        </style.Container>
    )
}
