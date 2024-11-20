import React, {useState} from 'react'

export default function Control() {
    const [formData, setFormData] = useState({
        team1Name: '',
        team2Name: '',
        team1SeasonScore: '',
        team2SeasonScore: '',
    })

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formData)
    };

    const handleInputChange = (event) => {
        const value = event.target.value
        setFormData({
            ...formData,
            [event.target.name]: value,
        });
    };

    return (
        <div className="h-full flex space-x-4">
            <div className='flex-1 space-x-4 border-2 border-white max-w-fit p-8 rounded-md'>

                <div className='text-white text-center pb-2 text-2xl'>
                    Team Information
                </div>

                <form onSubmit={handleFormSubmit}>
                    <div className='mb-1 mt-3'>
                        <input type='text' className='form-control pl-1' placeholder='Team 1 Name' id='team1Name' name='team1Name' onChange={handleInputChange} value={formData.team1Name}/>
                    </div>

                    <div className='mb-1'>
                        <input type='text' className='form-control pl-1' placeholder='Team 2 Name' id='team2Name' name='team2Name' onChange={handleInputChange} value={formData.team2Name} />
                    </div>

                    <div className='mb-1 mt-3'>
                        <input type='text' className='form-control pl-1' placeholder='Team 1 Season Score' id='team1SeasonScore' name='team1SeasonScore' onChange={handleInputChange} value={formData.team1SeasonScore}/>
                    </div>

                    <div className='mb-1'>
                        <input type='text' className='form-control pl-1' placeholder='Team 2 Season Score' id='team2SeasonScore' name='team2SeasonScore' onChange={handleInputChange} value={formData.team2SeasonScore} />
                    </div>

                    <button type='submit' className='bg-white rounded-md px-2 mt-2'>
                        Save
                    </button>
                </form>
            </div>

            <div className='flex-1 border-2 border-white max-w-fit p-8 rounded-md'>
                <div className='text-white text-center pb-2 text-2xl'>
                    Game 1
                </div>

                <form onSubmit={handleFormSubmit}>
                    <div className='mb-1 mt-3'>
                        <input type='text' className='form-control pl-1' placeholder='Team 1 Name' id='team1Name' name='team1Name' onChange={handleInputChange} value={formData.team1Name}/>
                    </div>

                    <div className='mb-1'>
                        <input type='text' className='form-control pl-1' placeholder='Team 2 Name' id='team2Name' name='team2Name' onChange={handleInputChange} value={formData.team2Name} />
                    </div>

                    <div className='mb-1 mt-3'>
                        <input type='text' className='form-control pl-1' placeholder='Team 1 Season Score' id='team1SeasonScore' name='team1SeasonScore' onChange={handleInputChange} value={formData.team1SeasonScore}/>
                    </div>

                    <div className='mb-1'>
                        <input type='text' className='form-control pl-1' placeholder='Team 2 Season Score' id='team2SeasonScore' name='team2SeasonScore' onChange={handleInputChange} value={formData.team2SeasonScore} />
                    </div>

                    <button type='submit' className='bg-white rounded-md px-2 mt-2'>
                        Save
                    </button>
                </form>
            </div>

            <div className='flex-1 border-2 border-white max-w-fit p-8 rounded-md'>
                <div className='text-white text-center pb-2 text-2xl'>
                    Game 2
                </div>

                <form onSubmit={handleFormSubmit}>
                    <div className='mb-1 mt-3'>
                        <input type='text' className='form-control pl-1' placeholder='Team 1 Name' id='team1Name' name='team1Name' onChange={handleInputChange} value={formData.team1Name}/>
                    </div>

                    <div className='mb-1'>
                        <input type='text' className='form-control pl-1' placeholder='Team 2 Name' id='team2Name' name='team2Name' onChange={handleInputChange} value={formData.team2Name} />
                    </div>

                    <div className='mb-1 mt-3'>
                        <input type='text' className='form-control pl-1' placeholder='Team 1 Season Score' id='team1SeasonScore' name='team1SeasonScore' onChange={handleInputChange} value={formData.team1SeasonScore}/>
                    </div>

                    <div className='mb-1'>
                        <input type='text' className='form-control pl-1' placeholder='Team 2 Season Score' id='team2SeasonScore' name='team2SeasonScore' onChange={handleInputChange} value={formData.team2SeasonScore} />
                    </div>

                    <button type='submit' className='bg-white rounded-md px-2 mt-2'>
                        Save
                    </button>
                </form>
            </div>

            <div className='flex-1 border-2 border-white max-w-fit p-8 rounded-md'>
                <div className='text-white text-center pb-2 text-2xl'>
                    Game 3
                </div>

                <form onSubmit={handleFormSubmit}>
                    <div className='mb-1 mt-3'>
                        <input type='text' className='form-control pl-1' placeholder='Team 1 Name' id='team1Name' name='team1Name' onChange={handleInputChange} value={formData.team1Name}/>
                    </div>

                    <div className='mb-1'>
                        <input type='text' className='form-control pl-1' placeholder='Team 2 Name' id='team2Name' name='team2Name' onChange={handleInputChange} value={formData.team2Name} />
                    </div>

                    <div className='mb-1 mt-3'>
                        <input type='text' className='form-control pl-1' placeholder='Team 1 Season Score' id='team1SeasonScore' name='team1SeasonScore' onChange={handleInputChange} value={formData.team1SeasonScore}/>
                    </div>

                    <div className='mb-1'>
                        <input type='text' className='form-control pl-1' placeholder='Team 2 Season Score' id='team2SeasonScore' name='team2SeasonScore' onChange={handleInputChange} value={formData.team2SeasonScore} />
                    </div>

                    <button type='submit' className='bg-white rounded-md px-2 mt-2'>
                        Save
                    </button>
                </form>
            </div>

            <div className='flex-1 border-2 border-white max-w-fit p-8 rounded-md'>
                <div className='text-white text-center pb-2 text-2xl'>
                    Game 4
                </div>

                <form onSubmit={handleFormSubmit}>
                    <div className='mb-1 mt-3'>
                        <input type='text' className='form-control pl-1' placeholder='Team 1 Name' id='team1Name' name='team1Name' onChange={handleInputChange} value={formData.team1Name}/>
                    </div>

                    <div className='mb-1'>
                        <input type='text' className='form-control pl-1' placeholder='Team 2 Name' id='team2Name' name='team2Name' onChange={handleInputChange} value={formData.team2Name} />
                    </div>

                    <div className='mb-1 mt-3'>
                        <input type='text' className='form-control pl-1' placeholder='Team 1 Season Score' id='team1SeasonScore' name='team1SeasonScore' onChange={handleInputChange} value={formData.team1SeasonScore}/>
                    </div>

                    <div className='mb-1'>
                        <input type='text' className='form-control pl-1' placeholder='Team 2 Season Score' id='team2SeasonScore' name='team2SeasonScore' onChange={handleInputChange} value={formData.team2SeasonScore} />
                    </div>

                    <button type='submit' className='bg-white rounded-md px-2 mt-2'>
                        Save
                    </button>
                </form>
            </div>

            <div className='flex-1 border-2 border-white max-w-fit p-8 rounded-md'>
                <div className='text-white text-center pb-2 text-2xl'>
                    Game 5
                </div>

                <form onSubmit={handleFormSubmit}>
                    <div className='mb-1 mt-3'>
                        <input type='text' className='form-control pl-1' placeholder='Team 1 Name' id='team1Name' name='team1Name' onChange={handleInputChange} value={formData.team1Name}/>
                    </div>

                    <div className='mb-1'>
                        <input type='text' className='form-control pl-1' placeholder='Team 2 Name' id='team2Name' name='team2Name' onChange={handleInputChange} value={formData.team2Name} />
                    </div>

                    <div className='mb-1 mt-3'>
                        <input type='text' className='form-control pl-1' placeholder='Team 1 Season Score' id='team1SeasonScore' name='team1SeasonScore' onChange={handleInputChange} value={formData.team1SeasonScore}/>
                    </div>

                    <div className='mb-1'>
                        <input type='text' className='form-control pl-1' placeholder='Team 2 Season Score' id='team2SeasonScore' name='team2SeasonScore' onChange={handleInputChange} value={formData.team2SeasonScore} />
                    </div>

                    <button type='submit' className='bg-white rounded-md px-2 mt-2'>
                        Save
                    </button>
                </form>
            </div>

            <div className='flex-1 border-2 border-white max-w-fit p-8 rounded-md'>
                <div className='text-white text-center pb-2 text-2xl'>
                    Game 6
                </div>

                <form onSubmit={handleFormSubmit}>
                    <div className='mb-1 mt-3'>
                        <input type='text' className='form-control pl-1' placeholder='Team 1 Name' id='team1Name' name='team1Name' onChange={handleInputChange} value={formData.team1Name}/>
                    </div>

                    <div className='mb-1'>
                        <input type='text' className='form-control pl-1' placeholder='Team 2 Name' id='team2Name' name='team2Name' onChange={handleInputChange} value={formData.team2Name} />
                    </div>

                    <div className='mb-1 mt-3'>
                        <input type='text' className='form-control pl-1' placeholder='Team 1 Season Score' id='team1SeasonScore' name='team1SeasonScore' onChange={handleInputChange} value={formData.team1SeasonScore}/>
                    </div>

                    <div className='mb-1'>
                        <input type='text' className='form-control pl-1' placeholder='Team 2 Season Score' id='team2SeasonScore' name='team2SeasonScore' onChange={handleInputChange} value={formData.team2SeasonScore} />
                    </div>

                    <button type='submit' className='bg-white rounded-md px-2 mt-2'>
                        Save
                    </button>
                </form>
            </div>
        </div>
    )
}