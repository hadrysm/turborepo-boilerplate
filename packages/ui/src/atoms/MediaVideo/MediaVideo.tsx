interface BaseMediaVideo {
  width?: string;
  height?: string;
}

interface FirstRequired extends BaseMediaVideo {
  videoURL: string;
  videoFilePath?: never;
}

interface SecondRequired extends BaseMediaVideo {
  videoURL?: never;
  videoFilePath: string;
}

type MediaVideoProps = FirstRequired | SecondRequired;

export const MediaVideo = ({
  videoURL,
  videoFilePath,
  width = '100%',
  height = '100%',
}: MediaVideoProps) =>
  videoURL ? (
    <iframe
      width={width}
      height={height}
      src={videoURL}
      title="Media Player"
      frameBorder="0"
      allowFullScreen
    />
  ) : (
    // eslint-disable-next-line jsx-a11y/media-has-caption
    <video controls autoPlay width={width} height={height}>
      <source src={videoFilePath} type="video/mp4" />
      <source src={videoFilePath} type="video/webm" />
      <p>Your browser cannot play the provided video file.</p>
    </video>
  );
