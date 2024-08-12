import { AddressLike } from "ethers";

export interface IProduct {
  id: number;
  name: string;
  price: bigint;
  seller: AddressLike;
  sold: boolean;
  buyer: AddressLike;
  confirmed: boolean;
}
