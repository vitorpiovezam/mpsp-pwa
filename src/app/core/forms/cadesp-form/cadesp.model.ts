export interface ICadespRequest {
  cnpj: string;
}

export interface ICadespResponse {
  ie: String,
  cnpj: String,
  businessName: String,
  drt: String,
  situation: Boolean,
  dateStateRegistration: String,
  stateRegime: String,
  taxOffice: String,
  fantasyName: String,
  nire: String,
  registrationSituation: Boolean,
  taxOccurrence: Boolean,
  unitType: String,
  ieStartDate: String,
  dateStartedSituation: String,
  practices: String
}
