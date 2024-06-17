export interface IOption {
  label: string;
  value: string;
  id: number;
}

export interface IActiveble {
  isActive?: boolean;
}

export interface IOpenable {
  isOpen: boolean;
}

export interface IInvalid {
  isError: boolean;
}

export interface IDisabled {
  disabled: boolean;
}
