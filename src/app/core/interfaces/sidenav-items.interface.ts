export interface SidenavItemInterface {
  id: string;
  name: string;
  icon: string;
  routerLink?: string;
  children: SidenavItemInterface[];
}
