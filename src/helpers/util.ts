/**
 * Transform Populate response
 * from query-builder helper class
 */
export function transformResponse(response: { [key: string]: any }[], prefixes: string[]) {
  return response.map((item) => {
    let res = {};
    prefixes.forEach((prefix) => {
      const relatableTable: { [key: string]: string } = {};

      Object.keys(item).forEach((key) => {
        const adjustedKey = key.split('_').slice(0, -1).join('_');
        if (adjustedKey === prefix) {
          relatableTable[key.substring(prefix.length + 1)] = item[key] as string;
          delete item[key];
        }
      });
      res = { ...res, [prefix]: relatableTable };
    });
    res = { ...item, ...res };
    return res;
  });
}

/**
 * Transform Populate response one
 * from query-builder helper class
 */
export function transformResponseOne(response: { [key: string]: any }, prefixes: string[]) {
  if (!response) return response;
  let res = {};
  prefixes.forEach((prefix) => {
    const relatableTable: { [key: string]: string } = {};
    Object.keys(response).forEach((key) => {
      const adjustedKey = key.split('_').slice(0, -1).join('_');
      if (adjustedKey === prefix) {
        relatableTable[key.substring(prefix.length + 1)] = response[key] as string;
        delete response[key];
      }
    });
    res = { ...res, [prefix]: relatableTable };
  });
  return { ...response, ...res };
}
