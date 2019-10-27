export interface ICagedResponsibleRequest {
  searchType?: Number,
  term?: String
}

export interface ICagedResponsibleResponse {
  identification?: ICagedResponsibleIdentification,
  address?: ICagedResponsibleAddress,
  contact?: ICagedResponsibleContact
}

export interface ICagedResponsibleIdentification {
  cnpjCeiCpf?: String,
  name?: String
}

export interface ICagedResponsibleAddress {
  street?: String,
  neighborhood?: String,
  city?: String,
  state?: String,
  cep?: String
}

export interface ICagedResponsibleContact {
  name?: String,
  cpf?: String,
  phone?: String,
  line?: String,
  email?: String
}

export interface ICagedCompanyRequest {
  cnpj?: String
}

export interface ICagedCompanyResponse {
  cnpj?: String,
  name?: String,
  cnae?: String,
  subsidiaries?: String,
  admissions?: String,
  demissions?: String
}

export interface ICagedWorkerRequest {
  searchType?: Number,
  term?: String
}

export interface ICagedWorkerResponse {
  name?: String,
  pis?: String,
  convertedPis?: String,
  cpf?: String,
  birthDate?: String,
  ctpsSerie?: String,
  pisSituation?: String,
  sex?: String
  nationality?: String,
  color?: String,
  study?: String,
  hasDisability?: Boolean,
  pdfUrl?: String
}