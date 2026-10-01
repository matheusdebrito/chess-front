import { useEffect, useState } from 'react'
import './App.css'
import { Card } from './components/card'


type Streamers = {
  username: string,
  avatar: string,
  twitch_url: string,
  is_live?: boolean,
}


function App() {
  const [streamers, setStreamers] = useState<Streamers[]>([])
  const [search, setSearch] = useState('');

  const loadStreamers = async () => {
  const req = await fetch("https://api.chess.com/pub/streamers")
  const json = await req.json()
  const clone = [...streamers]

  json.streamers.map((item: any, index: number) => (
    clone.push({username:json.streamers[index].username, avatar:json.streamers[index].avatar, twitch_url:json.streamers[index].twitch_url, is_live:json.streamers[index].is_live})
  ))

  setStreamers(clone)
}

  const streamersFiltrados = streamers.filter((item) => item.username.toLowerCase().includes(search.toLowerCase()))

  useEffect(() => {loadStreamers()},[])

  return (
    <>
    <div className="search-container">
      <label className="search-bar">
        <span className="search-icon" aria-hidden="true" />
        <input
          className="search-input"
          type="search"
          placeholder="Buscar streamer..."
          aria-label="Buscar streamer"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </label>
    </div>
    <div className="cards">
      {streamersFiltrados.map((item) => (
        <Card
          key={item.username}
          username={item.username}
          avatar={item.avatar}
          twitch_url={item.twitch_url}
          is_live={item.is_live}
        />
      ))}

      
    </div>
    </>
  )
}

export default App
