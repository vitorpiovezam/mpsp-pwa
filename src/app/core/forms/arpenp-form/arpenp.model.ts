export interface IArpenpRequest {
  registryType?: string;
  processNumber?: string;
  placeId?: Number;
}

export interface IArpenpResponse {
  spouse1OldName: String,
  spouse1NewName: String,
  spouse2OldName: String,
  spouse2NewName: String,
  marriageDate: String
}
