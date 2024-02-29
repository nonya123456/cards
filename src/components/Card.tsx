import { FC } from 'react'

interface CardProps {
    index: number | null,
    handleDraw: () => void,
}

const Card: FC<CardProps> = ({ index, handleDraw }) => {
    const suits = ["♧", "♢", "♡", "♤"]
    const ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]

    const getSuit = (index: number | null) => {
        if (index === null) {
            return null
        }
        return suits[index % 4]
    }

    const getRank = (index: number | null) => {
        if (index === null) {
            return null
        }
        return ranks[Math.floor(index / 4)]
    }

    return (
        <div className="card" onClick={() => handleDraw()}>
            <p>{getRank(index)}</p>
            <p>{getSuit(index)}</p>
        </div>
    );
};


export default Card 
