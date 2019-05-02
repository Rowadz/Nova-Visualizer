export interface TreeSubejct {
  id?: number; // might delete it an use the cid insted.
  cid: string;
  name: string;
  lvl: 1 | 2 | 3 | 4;
  dependsOn?: Array<string>;
  optional?: true;
}
