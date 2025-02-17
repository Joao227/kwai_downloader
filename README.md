# Kwai Downloader 🚀

**Kwai Downloader** é uma biblioteca simples e eficiente para baixar vídeos do Kwai diretamente para o seu computador, sem marcas d'água! Com ela, você pode acessar informações detalhadas sobre os vídeos, como autor, descrição, número de curtidas, comentários e muito mais. Tudo isso de forma rápida e descomplicada.

---

## ✨ Recursos

- **Download de vídeos sem marca d'água**: Obtenha vídeos do Kwai em alta qualidade, prontos para uso.
- **Metadados completos**: Acesse informações como nome do autor, descrição, número de curtidas, compartilhamentos e comentários.
- **Fácil integração**: Basta instalar e começar a usar em poucos passos.
- **Assíncrono e eficiente**: Utiliza Promises para garantir um desempenho otimizado.

---

## 📦 Instalação

Para começar a usar o **Kwai Downloader**, instale via npm:

```bash
npm install kwai-downloader
```

## 🛠️ Como usar

```bash
const { kwaiDownloader } = require("kwai-downloader");

// Função assíncrona para baixar vídeo e obter metadados
kwaiDownloader('https://www.kwai.com/@TeleKwaiBrasil/video/5213066670017241078')
  .then(data => {
    console.log("Dados do vídeo:", data);
  })
  .catch(error => {
    console.error("Erro ao baixar o vídeo:", error);
  });
```

## 📄 Exemplo de resposta

Se o link fornecido for válido, a função retornará um objeto com os seguintes dados:

```bash
{
  "authorName": "TeleKwai Brasil",
  "description": "Vídeo top do Telekwai. Acesse as páginas iniciais dos nossos criadores para ver mais vídeos legais! #telekwai @Reino do Lucas(O150001370819313)",
  "numbersComments": "11.4K",
  "numbersShare": "23.8K",
  "numbersLike": "570.5K",
  "videoUrl": "https://aws-br-cdn.kwai.net/upic/2023/03/13/20/BMjAyMzAzMTMyMDUxNTFfMTUwMDAxMDE0ODEwNjcwXzE1MDEwMjM4OTg3MTkxNl8xXzM=_b_B80a0d094dcd7949f1897a4fc080fb151.mp4?tag=1-1739833596-s-0-a9pt9tqvke-5fa52fd064aad11f"
}
```

## 👨‍💻 Desenvolvido por
Kwai Downloader foi criado por ScriptSantos.
📌 Canal do YouTube:  [ScriptSantos](https://www.youtube.com/@ScriptSantos?sub_confirmation=1)
💡 Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests no repositório oficial.
