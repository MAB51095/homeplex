import tmdbClient, { uri } from "../Api/tmdbClient";

export async function getTrailerKey(id, type) {
  const url = (
    type === "movie" ? uri.fetchMovieTrailerKey : uri.fetchSeriesTrailerKey
  ).replace("id", id);
  let keyRequest = await tmdbClient.get(url);
  let key =
    uri.youtubeURL +
    keyRequest.data.results.filter(
      (m) => m.site === "YouTube" && m.type === "Trailer"
    )[0]?.key;
  return key;
}
