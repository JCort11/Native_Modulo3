export interface Book {
  id: number;
  title: string;
  author: string;
  category: string;
  description: string;
  favorite?: boolean;
}