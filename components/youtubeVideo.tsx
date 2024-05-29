export default function YouTubeVideo(prop: {
  src: string;
  width: string;
  height: string;
}) {
  return (
    <iframe
      tabIndex={-1}
      src={prop.src}
      width={prop.width}
      height={prop.height}
      frameBorder="0"
      allowFullScreen
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
    />
  );
}
