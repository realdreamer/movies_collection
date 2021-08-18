import ProfileCard from "../ProfileCard";

export default function Cast({ data = []}) {
  return (
    <div className="cast__section">
      <h2>Cast</h2>
      <div className="mc-flex mc-flex-row mc-flex-nowrap credits__wrapper">
        {data.map(({ id, profile_path, character, ...cast}) => (
          <ProfileCard
            key={`cast-${id}`}
            profilePath={profile_path}
            subtitle={character}
            {...cast}
          />
        ))}
      </div>
    </div>
  );
}
