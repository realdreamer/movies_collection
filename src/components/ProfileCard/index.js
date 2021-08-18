import './index.css';

export default function ProfileCard({name, profilePath, subtitle}) {
  return (
    <figure className="profile-card">
      {profilePath ? (
        <img
        className="profile__image"
        src={`https://image.tmdb.org/t/p/w500${profilePath}`}
        alt={name}
      />) : (
        <span className="profile__no-image">No Image</span>
      )}
      <figcaption className="profile__caption">
        <h2 className="profile__name">{name}</h2>
        <h4 className="profile__subtitle">{subtitle}</h4>
      </figcaption>
    </figure>
  )
}
