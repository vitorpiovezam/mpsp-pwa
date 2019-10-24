export interface IArpenpRequest {
  registryType?: string;
  processNumber?: string;
  placeId?: Number;
}

export interface IArpenpResponse {
  spouse1OldName: String,
  spouse1NewName: String,
  spouse21OldName: String,
  spouse21NewName: String,
  marriageDate: String
}
