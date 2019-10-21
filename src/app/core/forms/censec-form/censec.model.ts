export interface ICensecRequest{
  cpfCnpj: String
}

export interface ICensecResponse{
  office: String,
  date: String,
  act: String,
  actDate: String,
  book: String,
  bookComplement: String,
  page: String,
  pageComplement: String,
  parts: ICensecPart[]
}

export interface ICensecPart{
  name: String,
  document: String,
  role: String
}