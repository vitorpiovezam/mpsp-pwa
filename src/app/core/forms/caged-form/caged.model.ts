export interface CagedResponsibleRequest {
  searchType: Number,
  term: String
}

export interface CagedResponsibleResponse {
  identification: CagedResponsibleIdentification,
  address: CagedResponsibleAddress,
  contact: CagedResponsibleContact
}

export interface CagedResponsibleIdentification {
  cnpjCeiCpf: String,
  name: String
}

export interface CagedResponsibleAddress {
  street: String,
  neighborhood: String,
  city: String,
  state: String,
  cep: String
}

export interface CagedResponsibleContact {
  name: String,
  cpf: String,
  phone: String,
  line: String,
  email: String
}

export interface CagedCompanyRequest {
  cnpj: String
}

export interface CagedCompanyResponse {
  cnpj: String,
  name: String,
  cnae: String,
  subsidiaries: String,
  admissions: String,
  demissions: String
}

export interface CagedWorkerRequest {
  searchType: Number,
  term: String
}

export interface CagedWorkerResponse {
  name: String,
  pis: String,
  convertedPis: String,
  cpf: String,
  birthDate: String,
  ctpsSerie: String,
  pisSituation: String,
  sex: String,
  nationality: String,
  color: String,
  study: String,
  hasDisability: Boolean,
  pdfUrl: String
}