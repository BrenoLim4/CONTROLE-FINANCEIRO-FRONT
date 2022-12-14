export interface ModuloReducerState {
  moduleName: string;
  sections?: Section[];
  moduleIcon: any;
}
export interface Section {
  name: string;
  pages: Page[];
  sectionIcon: any;
  roles?: string[];
  offline?: boolean;
}
export interface Page {
  name: string;
  link: string;
  icon?: any;
  onMenu?: boolean;
  roles?: string[];
  offline?: boolean;
}
