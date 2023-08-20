import {
    GetCatalogs, addCatalog,deleteCatalog
  } from "../../../Services/GetCatalogs";

export const getCatalogsAction = async () => {
    const info = await GetCatalogs();
    return info;
  };

export const addCatalogsAction = async (catalogName) => {
  const info = await addCatalog(catalogName);
  return info;
}

export const deleteCatalogsAction = async (id) => {
  const info = await deleteCatalog(id);
  return info;
}