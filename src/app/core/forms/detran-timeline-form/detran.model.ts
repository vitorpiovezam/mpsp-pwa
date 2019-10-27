export interface IDetranCNHRequest {
  cpf?: String
}

export interface IDetranCNHResponse {
  imagePath?: String
  renach?: String
  category?: String
  emission?: String
  birthDate?: String
  conductionName?: String
  fatherName?: String
  motherName?: String
  registerDate?: String
  typographic?: String
  identification?: String
  cpf?: String
}

export interface IDetranTimeLineRequest {
  registry?: String
  rg?: String
  conductorName?: String
  pgu?: String
  uf?: String
}

export interface IDetranTimeLineResponse {
  registryFileUrl?: String
}

export interface IDetranVehicleRequest {
  board?: String
  document?: String
  renavam?: String
}

export interface IDetranVehicleResponse {
  registryFileUrl?: String
} 