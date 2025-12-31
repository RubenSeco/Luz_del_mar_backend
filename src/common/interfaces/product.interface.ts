export interface Pagination {
  page: number;
  limit: number;
};

export interface Product {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  slug: string;
}
