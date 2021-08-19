import ProfileCard from '../ProfileCard';

export default function Crew({ data }) {
  const uniqueCrewData = [
    ...new Map(
      data.map(item => [item.id, item])
    ).values()
  ];

  return (
    <div className="cast__section">
      <h2>Crew</h2>
      <div className="mc-flex mc-flex-row mc-flex-nowrap credits__wrapper">
        {uniqueCrewData.map(({ id, profile_path, job, ...crew}) => (
          <ProfileCard
            key={`crew-${id}`}
            profilePath={profile_path}
            subtitle={job}
            {...crew}
          />
        ))}
      </div>
    </div>
  );
}
