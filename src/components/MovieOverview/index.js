import {  useParams } from "react-router-dom";

export default function MovieOverview() {
  const { id } = useParams();

  return (
    <div>{id}</div>
  );
}
