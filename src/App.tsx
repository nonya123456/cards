import { useState, useEffect } from 'react'
import './App.css'
import Card from './components/Card';

function App() {
    const [count, setCount] = useState(0)
    const [cards, setCards] = useState<number[]>([])

    const shuffleCards = () => {
        const cardList = Array.from({ length: 52 }, (_, i) => i)
        cardList.sort(() => Math.random() - 0.5)
        setCards(cardList)
    };

    const handleDraw = () => {
        if (count >= 52) {
            return
        }
        setCount((count) => count + 1)
    }

    const handleReset = () => {
        shuffleCards()
        setCount(0)
    };

    const getCard = () => {
        if (count === 0) {
            return null
        }
        return cards[count - 1];
    }

    useEffect(() => {
        shuffleCards()
    }, [])

    return (
        <>
            <p>Remaining: {52 - count}</p>
            <Card index={getCard()} handleDraw={handleDraw} />
            <button onClick={handleReset} style={{ marginTop: "10vw" }}>Reset</button>
        </>
    )
}

export default App
