export class CepAbertoEndereco {
    altitude: number;
    latitude: number;
    longitude: number;
    cep: string;
    logradouro: string;
    bairro: string;
    cidade: Cidade;
    estado: Estado;
}

export class Cidade {
    ddd: number;
    ibge: string;
    nome: string;
}

export class Estado {
    sigla: string;
}
