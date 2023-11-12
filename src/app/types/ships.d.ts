type ShipNations = Nation[];

type Nation = {
  name: string,
  title: string,
  icons: NationIcons,
  types: Type[],
};

type NationIcons = {
  small:string | null,
  medium: string | null,
  large: string | null,
};

type Type = {
  name: string,
  icons: TypeIcons,
  ships: Ship[],
};

type Ship = {
  title: string,
  description: string,
  icons: ShipIcons,
  level: number,
  type: ShipType,
  nation: ShipNation,
};

type ShipIcons = {
  large: string | null,
  medium: string | null,
};

type ShipType = {
  name: string,
  title: string,
  icons: TypeIcons,
};

type ShipNation = {
  name: string,
  title: string,
  color: string,
  icons: NationIcons,
};

type TypeIcons = {
  default: string | null,
};

type LevelOption = {
  number: number;
  isSelected: boolean;
};

type NationOption = {
  name: string;
  icon: string | null;
  isSelected: boolean;
};

type TypeOption = {
  name: string;
  icon: string | null;
  isSelected: boolean;
};

type FiltersState = {
  nationOptions: NationOption[];
  typeOptions: TypeOption[];
  levelOptions: LevelOption[];
};