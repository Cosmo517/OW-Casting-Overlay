import antarticImage from '../../../map_images/control/Antarctic_Peninsula_1.png'

export default function MatchCard() {
    return (
        <div className='flex flex-col border-2 rounded-md border-slate-600 text-white'>
            <h1 className='text-3xl text-center font-medium pt-5'>
                Game 1
            </h1>
            <h2 className='text-xl text-center font-medium pt-8'>
                Control
            </h2>
            <div className="px-2 pt-8">
                <img src={antarticImage} alt="Antartic Peninsula"/>
            </div>
            <div className='border-2 border-white rounded-md text-center mt-8 mx-28 py-8 text-3xl font-bold'>
                2 - 1
                Score
            </div>
            <h1 className='text-3xl text-center pt-10 font-semibold'>
                FL Poly Phoenixes
            </h1>
        </div>
    )
}