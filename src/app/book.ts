export interface Book {
  id: number;
  title: string;
  authors: string;
  category: {
    id: number;
    nameCategory: string
  };
  status: {
    id: number;
    nameStatus: string
  };
}
