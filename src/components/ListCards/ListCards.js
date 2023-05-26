import React from 'react'
import { Draggable } from 'react-smooth-dnd'
import Card from './Card/Card'

const ListCards = (props) => {
    const { card } = props
    return card.map((card, index) => (
        <Draggable key={index}>
            <Card card={card} />
        </Draggable>
    ))
}
export default React.memo(ListCards)