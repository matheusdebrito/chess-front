import './index.css'

type CardProps = {
    username: string,
    avatar: string,
    twitch_url: string,
    is_live?: boolean,
}

export function Card({
    username,
    avatar,
    twitch_url,
    is_live,
}: CardProps) {


    return (
        <article className={`streamer-card${is_live ? ' is-live' : ''}`}>
            <div className="streamer-avatar-wrap">
                <img className="streamer-avatar" src={avatar} alt={`${username} avatar`} />
                <span className="streamer-status-dot" aria-hidden="true" />
            </div>
            <div className="streamer-details">
                <p className="streamer-eyebrow">Chess.com streamer</p>
                <h2 className="streamer-name">{username}</h2>
                <a className="streamer-link" href={twitch_url} target="_blank" rel="noreferrer">
                    Assistir na Twitch <span aria-hidden="true">↗</span>
                </a>
            </div>
            <span className={`streamer-status${is_live ? ' is-live' : ''}`}>
                {is_live ? 'AO VIVO' : 'OFFLINE'}
            </span>
        </article>
    )
}