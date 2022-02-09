import React, { useState } from 'react'
import * as style from './styles'

import { Item } from '../../types/Item'

type Props = {
    item: Item
    itemDoneState: (id: number, isDone: boolean) => void
}

export const ListItem = ({ item, itemDoneState }: Props) => {
    const [isChecked, setIsChecked] = useState(item.done)

    const setItemDone = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(event.target.checked)
        itemDoneState(item.id, event.target.checked)
    }

    return (
        <style.Container done={isChecked}>
            <input 
                type="checkbox" 
                checked={isChecked} 
                onChange={setItemDone}
            />
            <label>{item.name}</label>
        </style.Container>
    )
}
