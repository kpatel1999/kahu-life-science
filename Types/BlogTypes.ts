export interface BlogDataI {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  image: string;
  author: AuthorI;
  createdAt: string;
  updatedAt: string;
  readingTime: string;
  description: string[];
}

export interface AuthorI {
  name: string;
  details?: string;
  imgUrl?: string;
}
