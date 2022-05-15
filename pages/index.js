import { useState, useEffect } from 'react'
import { shuffle } from 'lodash'

export default function Home() {
  const NOTES = [
    ['C'],
    ['C#', 'Db'],
    ['D'],
    ['D#', 'Eb'],
    ['E'],
    ['F'],
    ['F#', 'Gb'],
    ['G'],
    ['G#', 'Ab'],
    ['A'],
    ['A#', 'Bb'],
    ['B'],
  ]

  const [randomNotes, setRandomNotes] = useState([])

  useEffect(() => {
    setRandomNotes(shuffle(NOTES).map((notes) => shuffle(notes)[0]))
  }, [])

  return (
    <div className='bg-gray-800 h-screen text-white flex items-center justify-center text-2xl flex-col'>
      <div className='w-100 grid grid-cols-4'>
        {randomNotes.map((note) => (
          <div
            key={note}
            className='w-12 h-12 rounded bg-gray-500 m-2 flex items-center justify-center'
          >
            {note}
          </div>
        ))}
      </div>
      <button
        onClick={() => setRandomNotes(shuffle(NOTES).map((notes) => shuffle(notes)[0]))}
        className='mt-6 text-xl bg-blue-500 p-3 rounded-lg shadow-xl'
      >
        Randomize
      </button>
    </div>
  )
}
