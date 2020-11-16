import { Cores } from "./Cores";

export interface Produto {
  nome: string;
  codigo: string;
  codigo2: string;
  preco: number;
  precoPromocional: number;
  maxParcelas: number;
  cores: Cores[];
  tamanhos: number[];
}
