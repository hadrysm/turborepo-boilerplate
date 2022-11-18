import Image, { ImageProps } from 'next/image';

/**
 * 1x1 transparent GIF pixel
 */
const blurDataUrl =
  'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==';

export const CustomImage = ({ src, alt = '', placeholder = 'blur', ...rest }: ImageProps) => (
  <Image src={src} alt={alt} placeholder={placeholder} blurDataURL={blurDataUrl} {...rest} />
);
