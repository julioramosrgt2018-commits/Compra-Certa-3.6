# COMPRA CERTA - GUIA DE INSTALAÇÃO E UTILIZAÇÃO

O **Compra Certa** é uma Progressive Web App (PWA) de controle de compras, gestão de saldos de benefícios, listas e comparativo de preços entre estabelecimentos.

## 📁 Estrutura dos Arquivos do Projeto
Para que a sua aplicação funcione perfeitamente (e possa ser instalada no telemóvel como um aplicativo nativo), crie os seguintes arquivos na raiz do seu repositório:

1. index.html (Interface principal, abas de carrinho, leitor de código de barras e OCR)
2. sw.js (Service Worker para cache offline e funcionamento como PWA)
3. manifest.webmanifest (Configurações do aplicativo para instalação na tela inicial)
4. README.txt (Este manual de instruções)

---

## 🚀 Como Publicar / Atualizar na Vercel

1. Aceda ao seu Repositório (no GitHub ou na plataforma onde hospeda o código).
2. Atualize ou crie os arquivos:
   - Certifique-se de que os nomes estão exatamente corretos (index.html, sw.js, manifest.webmanifest).
   - Cole o código atualizado em cada arquivo correspondente.
3. Faça o Commit / Push das alterações.
4. Vercel: Se a sua Vercel estiver conectada ao repositório (ex: GitHub), o deploy será feito de forma automática em poucos segundos.
5. Aceda ao seu link de produção da Vercel para testar a aplicação atualizada.

---

## 📱 Como Instalar no Telemóvel (PWA)

- Android (Chrome / Edge): Abra o link do seu site na Vercel, clique nos três pontos (menu do navegador) e selecione "Adicionar à tela inicial" ou "Instalar aplicativo".
- iOS (Safari / iPhone): Abra o link no Safari, toque no botão de Partilhar (ícone de quadrado com seta para cima) e selecione "Adicionar à Tela de Início".

---

## ✨ Funcionalidades Incluídas
- Carrinho & Estabelecimentos: Campo de texto livre para digitar o nome real do mercado/estabelecimento, adição de produtos, quantidades e preços unitários com cálculo automático de totais.
- Leitor de Código de Barras: Ativação direta da câmera traseira para escanear e preencher produtos.
- Gestão de Benefícios: Acompanhamento de saldos de cartões de Alimentação e Refeição.
- Planejamento de Compras: Lista de itens planejados.
- Controle de Validade: Registo de datas de vencimento de produtos.
- OCR de Cupom Fiscal: Leitura automática de texto de cupons através de imagem.
- Comparador de Preços: Análise automática de qual estabelecimento oferece o melhor preço para os itens adicionados.
