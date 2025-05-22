export interface DataObject {
  [key: string]: any;
}

export interface ICreate {
  data: DataObject;
  select?: string;
}

export interface IUpdate {
  id: string;
  newData: DataObject;
  select?: string;
}

export interface IUpdateMany {
  [key: string]: any; // Allows other dynamic keys with any type
  where: {
    [key: string]: any; // Dynamic keys with string values in 'where' object
  };
}