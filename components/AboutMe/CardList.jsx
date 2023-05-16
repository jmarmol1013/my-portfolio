import React from 'react'
import { CardItem } from './CardItem'

export const CardList = ({cardsInfo}) => {
    return(
        cardsInfo.map((card,index) => {
            return (
                <CardItem 
                    key={index}
                    cardInfo={card}
                />
            )
        })
    )
}
