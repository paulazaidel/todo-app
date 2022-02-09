import React, { useState, KeyboardEvent } from 'react'
import * as style from './styles'

type Props = {
    onEnter: (itemName: string) => void
}

export const AddItem = ({onEnter}: Props) => {
    const [inputText, setInputText] = useState('')

    const handleInputText = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(event.target.value)
    }

    const handleKeyUp = (event: KeyboardEvent) => {
        const isEnterKey = event.code == 'Enter' || event.code == 'NumpadEnter'
        if (isEnterKey && inputText !== '') {
            onEnter(inputText)
            setInputText('')
        }
    }

    return (
        <style.Container>
            <div className='image'>+</div>
            <input 
                type="text" 
                placeholder='New task'
                value={inputText}
                onChange={handleInputText}
                onKeyUp={handleKeyUp}
            />
        </style.Container>
    )
}
