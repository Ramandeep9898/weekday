type Field = {
  label: string;
  value: string;
};

type Department = {
  key: string;
  department: string;
  fields: Field[];
};

type FilterConfigItem = {
  type: string;
  name: string;
  label: string;
  departments?: Department[];
  fields?: Field[][];
  placeholder?: string;
  defaultValue?: string;
  required: boolean;
};

export type FiltersProps = {
  config: FilterConfigItem[];
};
