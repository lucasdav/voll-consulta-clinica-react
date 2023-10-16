import IEndereco from "./IEndereco";

export default interface ICLinica {
    email: string,
    nome: string,
    senha: string,
    endereco: IEndereco;
}