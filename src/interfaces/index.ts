export interface Media {
  id: string;
  title: string;
  image: string;
}

export interface MediaResponse {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}
