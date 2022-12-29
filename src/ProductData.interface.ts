export default interface ProductData {
  sku: string;
  active: boolean;
  titleSingle: string;
  titlePlural: string;
  properties: any;
  // ignoring just to not spend more time on it in this challenge
  maxDesigns: number;
  bleed: number;
  excludes: any;
  // ignoring just to not spend more time on it in this challenge
}
