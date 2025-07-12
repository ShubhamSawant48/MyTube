const VideoCards = ({ data }) => {
  console.log(data);
  const { snippet, statistics } = data;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="w-72 shadow-lg">
      <img src={thumbnails.medium.url} className="rounded-2xl"></img>
      <h3 className="font-bold text-lg">{title}</h3>
      <h3>{channelTitle}</h3>
      <h3>{statistics.viewCount} views</h3>
    </div>
  );
};

export default VideoCards;
