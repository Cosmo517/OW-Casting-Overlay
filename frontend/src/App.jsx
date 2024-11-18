import MatchCard from "./Components/MatchCard";

export default function App() {
  const matchCards = Array.from({length: 5})
  
  return (
    <div className="flex space-x-4 px-2 h-screen">
      {matchCards.map((_, index) =>(
        <MatchCard key={index}></MatchCard>
      ))}
    </div>
  )
}