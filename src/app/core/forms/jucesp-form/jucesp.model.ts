export interface IJucespRequest{
  companyName?: String
}

export interface IJucespResponse{
  companyType: String,
  date: String,
  initDate: String,
  cnpj: String,
  companyDescription: String,
  capital: String,
  address: String,
  number: String,
  locale: String,
  complement: String,
  postalCode: String,
  city: String,
  registryFileUrl: String
}