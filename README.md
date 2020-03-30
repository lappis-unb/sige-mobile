# SMI (smi-mobile)
O SMI mobile é uma aplicação PWA para recebimento de alertas relacionados ao SMI.

## Como rodar
Para subir a aplicação em sua máquina, rode o comando abaixo:

```
docker-compose up
```
A aplicação estará disponível na porta `8081` do seu computador. Para acessa-lo acesse: `http://localhost:8081/`

## Conexão com a API
O aplicativo faz conexões com a [API Master](https://gitlab.com/lappis-unb/projects/SMI/smi-master). Essa conexão está configurada para conectar com o serviço rodando em docker na mesma máquina com o nome `master-api`. Caso o serviço esteja em outro nome ou em outra máquina, basta configurar o endereço de acesso em `src/services/masterApi/http-common.js` alterando a `baseURL`. 
