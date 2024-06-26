export interface IFormDTO {
  name: string;
  phone?: string;
  email?: string;
  message?: string;
}

export interface IResponseOkDTO {
  message: string;
}

export interface IResponseErrorDTO extends IResponseOkDTO {
  errors: {
    phone: string[];
    email: string[];
  }
}