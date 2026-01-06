import path from "path";

export const DATA_DIR =
  process.env.NODE_ENV === 'production'
    ? '/data'
    : path.join(process.cwd(), 'data');

export const DATA_FILES = {
  users: 'users.json',
  products: 'products.json',
};
