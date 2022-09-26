export interface Pdf {
  thumbnail: string;
  title: string;
  oneLiner: string;
  pages: string;
  content: '';
}

export interface Image {
  thumbnail: string;
  description: string;
  size: string;
  image: string;
  title: string;
}

export interface Link {
  thumbnail: string;
  link: string;
  brief: string;
}

export interface Video {
  thumbnail: string;
  description: string;
  size: string;
  video?: string;
}

