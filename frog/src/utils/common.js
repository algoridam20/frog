export const getRowColById = (id, totalRows, totalCol) => {
  if (totalRows * totalCol >= id) {
    return {
      row: Math.ceil(id / totalCol),
      col: id % totalCol === 0 ? totalCol : id % totalCol,
    };
  }
  return {};
};

export const getRowById = (id, totalRows, totalCol) => {
  if (totalRows * totalCol >= id) {
    return {
      row: Math.ceil(id / totalCol),
    };
  }
  return {};
};

export const getColById = (id, totalRows, totalCol) => {
  if (totalRows * totalCol >= id) {
    return {
      col: id % totalCol === 0 ? totalCol : id % totalCol,
    };
  }
  return {};
};
