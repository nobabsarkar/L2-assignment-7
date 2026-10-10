export interface ComplainPayload {
  id: string;
  title: string;
  description: string;
  location: string;
  price: number;
  image: File;
  imageUrl?: string;
  status: string;
}

export type TUpdateComplainPayload = {
  title: string;
  description: string;
  location: string;
  price: number;
  image?: File[];
};

export type TUsers = {
  id: string;
  name: string;
  email: string;
  status: string;
  role: string;
};

export type TCreatePaymentPayload = {
  payment: string;
};
