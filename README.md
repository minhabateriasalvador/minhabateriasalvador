# Minha Bateria Salvador — site para Vercel

Versão independente do WordPress, em Next.js, React e TypeScript. A página inicial conserva a identidade azul/amarela, imagens e catálogo da referência, com copy revisada para atendimento e pedidos de bateria em Salvador.

## Abrir e editar

Na pasta `site-vercel`:

```sh
npm ci
npm run dev
```

A prévia fica em `http://127.0.0.1:3000`. Para produção local:

```sh
npm run build
npm run start
```

Páginas implementadas: `/`, `/sobre-nos/`, `/servicos/` e `/contato/`, além de página 404, `robots.txt` e `sitemap.xml`.

- `app/page.tsx`: página inicial e seções.
- `app/site.ts`: dados da loja, WhatsApp, catálogo e perguntas frequentes.
- `app/globals.css`: identidade visual e regras responsivas.
- `app/layout.tsx`: estrutura compartilhada, SEO e dados estruturados.
- `public/images/`: imagens locais. Não dependem do WordPress para carregar.

O blog e a política de privacidade continuam com links para suas páginas existentes no domínio antigo. Esses conteúdos não foram migrados nesta entrega. Mapa e avaliações abrem no Google Maps, evitando carregar o mapa incorporado antes de o visitante precisar dele.

## Publicar na Vercel

1. Importar o repositório na sua conta Vercel, usando `site-vercel` como **Root Directory** caso o repositório inclua a pasta de referência. Se o repositório contiver somente os arquivos do novo site, usar a raiz dele.
2. Selecionar o framework **Next.js**. Comando de instalação: `npm ci`; comando de build: `npm run build`. Manter a configuração de saída padrão do Next.js. Usar uma versão LTS de Node.js compatível com o Next.js instalado.
3. Publicar primeiro uma prévia para revisar o visual, informações comerciais e contatos.
4. Vincular `minhabateriasalvador.com.br` e configurar o DNS conforme os valores informados pela Vercel. Definir a versão sem `www` como principal e encaminhar a variante `www` para ela.
5. Concluir o planejamento dos endereços antigos antes de substituir o site atual.
6. Quando o domínio definitivo e a migração estiverem prontos, cadastrar `SITE_INDEXABLE=true` **somente no ambiente Production** e refazer o deploy. A Vercel fornece `VERCEL_ENV=production` nesse ambiente.
7. Conferir o HTML publicado: `robots` com `index, follow`, canonical do domínio novo e sitemap contendo as quatro páginas. Enviar o sitemap no Search Console.

**A prévia está intencionalmente com `noindex`.** O sitemap fica vazio até a ativação de produção. `robots.txt` permite o acesso para o robô conseguir ler o `noindex`; bloquear o rastreamento não seria um substituto equivalente. A condição de indexação foi testada para prévia, desenvolvimento e produção. Como as páginas são geradas na compilação, alterar a variável exige um novo build/deploy.

Nenhum deploy externo, mudança de DNS ou redirecionamento do domínio antigo foi realizado. Não havia uma sessão/token Vercel configurado nos locais padrão verificados.

## SEO e conversão

O foco principal da home é a intenção de compra de bateria em Salvador. As variações “disk bateria Salvador”, “disk baterias Salvador” e “bateria Moura Salvador” aparecem no contexto do serviço, marcas e dúvidas, sem criar páginas quase iguais apenas para singular/plural.

O conteúdo principal já chega no HTML. As imagens usam `next/image`, dimensões reservadas e tamanhos responsivos. Os cards abaixo do topo usam carregamento adiado nativo. Não há jQuery, Elementor, fontes externas, carrosséis ou fontes de ícones.

Os links de WhatsApp enviam uma mensagem com o tipo de bateria selecionado e pedem modelo/ano e bairro. Cliques de WhatsApp/telefone disparam `contact_click`, com `contact_method`, `contact_location` e `page_path`, na `dataLayer` local e como evento do navegador. Não há envio para GA4/GTM nesta entrega. Um clique é intenção de contato, não lead ou venda confirmados. A conexão com a ferramenta de medição deve ser feita com a propriedade correta do negócio.

Endereço, telefone e e-mail vieram da referência. O e-mail antigo foi preservado porque não foi confirmada a existência de uma caixa no domínio novo. Estoque, capacidades e cobertura são sujeitos à confirmação no atendimento. Horários, número de avaliações, condição de representante oficial e prazo fixo de entrega não foram publicados como novas promessas. A imagem institucional da loja veio da referência; confirmar que representa o estabelecimento atual antes da publicação.

O schema `AutomotiveBusiness` informa identidade e localização, sem notas de avaliação próprias usadas para tentar obter estrelas. O favicon e a imagem de compartilhamento originais foram recuperados do site público.

## Migração: o que já está mapeado

| URL antiga | Destino preparado | Situação |
| --- | --- | --- |
| `https://minhabateria.com.br/` | `https://minhabateriasalvador.com.br/` | Home pronta; redirecionamento ainda não ativado |
| `https://minhabateria.com.br/sobre-nos/` | `https://minhabateriasalvador.com.br/sobre-nos/` | Página pronta; redirecionamento ainda não ativado |
| `https://minhabateria.com.br/servicos/` | `https://minhabateriasalvador.com.br/servicos/` | Página pronta; redirecionamento ainda não ativado |
| `https://minhabateria.com.br/contato/` | `https://minhabateriasalvador.com.br/contato/` | Página pronta; redirecionamento ainda não ativado |
| `/blog/`, posts, política e outras URLs | A definir após inventário | Preservar os endereços atuais até a decisão |

Este é um mapa inicial de quatro páginas, não um inventário completo do domínio. Antes da mudança, exportar sitemap, páginas com cliques e links do Search Console; mapear individualmente os conteúdos que serão migrados. Não redirecionar todo o domínio antigo para a home nova nem ativar um redirecionamento geral enquanto páginas como blog e política ainda dependem do domínio antigo.

Os redirecionamentos permanentes precisam ser configurados no servidor/CDN que recebe as visitas do **domínio antigo**. Ter o novo site na Vercel não configura isso automaticamente. Manter o domínio antigo renovado e os redirecionamentos funcionando. Usar a ferramenta de mudança de endereço do Search Console quando aplicável à migração efetivamente realizada. Acompanhar indexação, erros e cliques depois da troca, sem prometer uma recuperação de posições em prazo fixo.

## Validação realizada em 08/09/2026

- Build de produção aprovado e quatro páginas pré-renderizadas.
- TypeScript em modo estrito aprovado.
- Respostas HTTP 200 nas quatro páginas e 404 real para endereço inexistente.
- Imagens utilizadas respondendo 200 com conteúdo de imagem.
- Um H1 por página, IDs únicos, canonical por rota e dados estruturados válidos.
- Links de WhatsApp com número e mensagem contextual conferidos, sem enviar mensagens.
- Proteção de indexação da prévia e matriz de ativação de produção testadas.
- Lighthouse móvel da produção local: 96/100, LCP 2,1 s, TBT 110 ms, CLS 0.

O teste local não representa o desempenho já publicado na Vercel nem resultados reais dos visitantes. Há oportunidade residual de reduzir JavaScript do framework. Medir novamente no domínio definitivo depois de conectar os recursos de produção. Não foi realizado um teste manual de cada interação em navegadores/dispositivos.

O diagnóstico da queda, as métricas brutas e as limitações estão na pasta vizinha `analise-seo`.
