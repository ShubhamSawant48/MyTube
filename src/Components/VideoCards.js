const VideoCards = ({ data }) => {
  console.log(data);
  const { snippet, statistics } = data;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="w-72 shadow-sm mr-1 mb-3">
      <img src={thumbnails.medium.url} className="rounded-2xl"></img>
      <h3 className="font-bold text-lg px-2">{title}</h3>
      <h3 className="px-2">{channelTitle}</h3>
      <h3 className="px-2 py-1">{statistics.viewCount} views</h3>
    </div>
  );
};

export default VideoCards;
