const API = process.env.NEXT_PUBLIC_API_URL;
const VERSION = process.env.NEXT_PUBLIC_API_VERSION;

const endPoints = {
  auth: {
    login: `${API}/api/${VERSION}/auth/login`,
    profile: `${API}/api/${VERSION}/auth/profile`,
  },
  products: {
    getProduct: (id) => `${API}/api/${VERSION}/products/${id}`,
    allProducts: `${API}/api/${VERSION}/products/`,
    deleteProduct: (id) => `${API}/api/${VERSION}/products/${id}`,
    addProduct: `${API}/api/${VERSION}/products`,
    putProduct: (id) => `${API}/api/${VERSION}/products/${id}`,
    getProducts: (limit, offset) =>
      `${API}/api/${VERSION}/products?limit=${limit}&offset=${offset}`,
  },
  users: {
    getUsers: `${API}/api/${VERSION}/users`,
    postUsers: `${API}/api/${VERSION}/users`,
  },
  categories: {
    getCategories: `${API}/api/${VERSION}/categories`,
    postCategories: `${API}/api/${VERSION}/categories`,
    getCategorie: (id) => `${API}/api/${VERSION}/categories/${id}`,
    putCategorie: (id) => `${API}/api/${VERSION}/categories/${id}`,
    getCategorieProduct: (id) =>
      `${API}/api/${VERSION}/categories/${id}/products`,
  },
  files: {
    postFiles: `${API}/api/${VERSION}/files/upload`,
    getFiles: (filename) => `${API}/api/${VERSION}/files/${filename}`,
  },
};

export default endPoints;
