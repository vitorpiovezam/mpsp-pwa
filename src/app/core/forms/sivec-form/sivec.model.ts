export interface ISivecRequest{
  searchType: 1 | 2 | 3,
  term: String
}

export interface IAddress {
  residential ?: String,
  city ?: String
}

export interface  ISivecResponse{
  name ?: String,
  sex ?: String,
  birth ?: String,
  rg ?: String,
  issueDateDocument ?: String,
  nickName ?: String,
  maritalStatus ?: String,
  naturalness ?: String,
  naturalized ?: Boolean,
  study ?: String,
  fatherName ?: String,
  motherName ?: String,
  color ?: String,
  profession ?: String,
  hair ?: String,
  eyeColor ?: String,
  address ?: IAddress
}
