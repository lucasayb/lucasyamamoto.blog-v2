---
title: Como foi o processo de migração do Jekyll para o Gatsby?
date: 2022-02-04 10:35:19
description: Vou descrever um pouco da minha jornada e os motivos da migração de
  tecnologias entre um blog Jekyll para Gatsby
thumbnail: /assets/uploads/gatsby-thumbnail.png
category: Experiência
color: "#341f97"
redirect_from: []
---
Desde quando fiz meu blog com Jekyll, adorei escrever em markdown. Mas confesso que o processo todo era muito manual e as vezes surgiam ideias para artigos que rapidamente iam embora só de pensar em todo o fluxo e estratagema que precisava fazer para publicar uma simples postagem. Até ontem, eu estava utilizando meu blog com Jekyll com o tema Minima, que é o tema base do Jekyll. Ele é relativamente customizável e, para um blog, é bonito, além de ter bastantes funcionalidades por ser um tema feito por uma comunidade bem grande.

Durante esse processo de migração que venho planejando há um tempo, descobri o Netlify CMS, como descrevi no meu post anterior ([2022: Ano novo, grandes mudanças](https://www.lucasyamamoto.com/2022-ano-novo-grandes-mudancas/)). Para Jekyll, ele já serviria e muito! Fica a dica para quem tem interesse em facilitar o processo de criação de posts com o Jekyll. Mas eu decidi ir além, mudar ainda mais e aprender algo ainda mais novo.

Em um determinado dia, vi uma loja online, [Marin Brasil](https://www.marinbrasil.com.br/), que estava utilizando uma tecnologia que a deixava muito rápida. Ela é feita em VTEX, mas o trabalho do time que a desenvolveu ficou realmente fantástico e vai muito além da plataforma. Atingia quase 99 pontos de performance no [Web.dev](https://web.dev). Fiquei abismado. Fui pesquisar um pouco mais e entender qual tecnologia estava sendo utilizada para deixá-la dessa forma e, pasmem, era Gatsby!

Desde então, estou querendo aprender Gatsby mas não tinha tempo pois meu trabalho na Codeby é full time. Porém no dia 26 de Janeiro de 2022 entrei de férias (fiz uma cirurgia logo não chegam a ser exatamente férias rsrs). Acabei ficando ocioso em casa e vi uma excelente oportunidade pra estudar algo.

## Design

Primeiro utilizei o Adobe XD para planejar o que eu iria fazer (desculpe pessoal do Figma, é o que eu sei hehe). Quis fazer o projeto realmente do zero.

Esse era o design inicial:

### **Home**

![Página inicial do blog](/assets/uploads/home-do-blog.png "Página inicial do blog")

### **Menu**

![Menu do blog](/assets/uploads/menu-do-blog.png "Menu do blog")

### **Busca**

![Busca do blog](/assets/uploads/busca-do-blog.png "Busca do blog")

Ao longo do desenvolvimento, algumas coisas mudaram, como algumas cores e alguns ícones que busquei do styled icons. Planejei tudo, tenho o arquivo XD que em breve compartilho aqui.

A ideia aqui foi deixar parecido com o tema Minima do Jekyll, mudando coisas bem pontuais como as categorias coloridas, a busca, o menu e o dark mode (que não está no design).

## Desenvolvimento

Para desenvolver o blog, assisti um curso muito bom do [Willian Justen](https://willianjusten.com.br/), que é o [“Gatsby: Crie um site PWA com React, GraphQL e Netlify CMS"](https://www.udemy.com/course/gatsby-crie-um-site-pwa-com-react-graphql-e-netlify-cms/).

### Funcionalidades e tecnologias

**Dark Mode**

![Darkmode](/assets/uploads/darkmode.png "Darkmode")

Vou fazer um post explicando sobre como foi feito o dark mode. Havia visto essa técnica em outro artigo do [CSS Tricks](https://css-tricks.com/easy-dark-mode-and-multiple-color-themes-in-react/), além de ter visto-a no curso que citei anteriormente. Consiste basicamente em definir algumas CSS variables para isso e através de duas classes CSS (`light`, `dark`) colocadas no body, podemos fazer a alteração facilmente com JavaScript. Funciona muito bem e tem suporte em quase todos os navegadores modernos de acordo com o [Can I Use](https://caniuse.com/css-variables).

**Algolia**

![Instant search da Algolia](/assets/uploads/screen-shot-2022-02-04-at-22.00.37.png "Instant search da Algolia")

O [Algolia](https://www.algolia.com/) é uma ferramenta excelente para busca. Basicamente você envia seus posts através de uma API e ao consumí-la no front end, além de uma indexação extremamente rápida, alguns recursos como spelling check, o próprio instant search que é o que eu utilizo no blog, fazem com que a ferramenta se torne essencial para blogs ou sites de pequeno, médio ou grande porte. Ah, o plano gratuito também é bem generoso, viu?

**Netlify CMS**

![Netlify CMS](/assets/uploads/screen-shot-2022-02-04-at-22.07.33.png "Netlify CMS")

Em breve quero fazer um post mais detalhado sobre o [Netlify CMS](http://netlifycms.org/) e como eu implementei seus recursos no blog. Mas essa é a carinha dele. Ele é open source, e automatiza o processo de abrir um Pull Request no repositório para criar um novo arquivo com markdown e fazer o commit, além de facilitar o upload de imagens da mesma forma. O processo de escrever um post se torna bem menos penoso e bastante user friendly.

**Gatsby**

![O blog todo foi feito em Gatsby](/assets/uploads/screen-shot-2022-02-04-at-22.20.15.png "O blog todo foi feito em Gatsby")

Em resumo, o site todo foi feito com Gatsby. É uma tecnologia incrível usada para gerar sites estáticos com React, com o foco principal em performance, mas por gerar arquivos estáticos, faz com que o front end não se torne inseguro e não crie gaps para invasões. Está realmente popular no mercado e a comunidade tem feito centenas de milhares de plugins para suprir quaisquer necessidades que nós como devs já sentimos.

## E as URLs antigas?

Se observar bem, migrei o formato das URLs.

**Antes era assim:**

[](https://www.lucasyamamoto.com/devops/2020/05/23/migrando-blog-em-jekyll-do-github-para-aws.html)<https://www.lucasyamamoto.com/devops/2020/05/23/migrando-blog-em-jekyll-do-github-para-aws.html>

**Agora está assim:**

[](https://www.lucasyamamoto.com/migrando-blog-em-jekyll-do-github-para-aws/)<https://www.lucasyamamoto.com/migrando-blog-em-jekyll-do-github-para-aws/>

Como eu tinha apenas 8 posts, acabei fazendo o processo manualmente, mas eu poderia ter feito um script para isso.

```markdown
---
redirect_from:
  - /dicas/2018/06/21/7-dicas-para-a-integracao-perfeita.html
title: "7 dicas para a integração perfeita"
date: 2018-06-21 18:55:41 -0300
category: Dicas
thumbnail: /assets/uploads/integracoes.jpg
description: Hoje em dia, muitas empresas que fazem o próprio site para se inserir na web decidem não abrir mão de seu ERP.
color: "#1abc9c"
---
```

Essa seção de um artigo é o front matter. Nela, você coloca metadados do artigo como título, data, categoria, thumbnail, etc. Com a ajuda de um plugin chamado [gatsby-redirect-from](https://www.gatsbyjs.com/plugins/gatsby-redirect-from/), você coloca a lista de URLs desejadas de onde os usuários irão partir, as URLs de origem, num atributo chamado `redirect_from`, e através disso, pude cumprir com esse meu objetivo de redirecionar o tráfego antigo para esse novo slug.

Além disso, como no Netlify CMS você declara quais atributos você deseja preencher pelo painel, coloquei o `redirect_from` também nessa lista.

![Redirect from no Netlify CMS](/assets/uploads/redirect_from_gif.gif "Redirect from no Netlify CMS")

Para fazer o `redirect_from` funcionar, cabe uma dica caso você utilize o plugin [gatsby-remark-relative-images](https://www.gatsbyjs.com/plugins/gatsby-remark-relative-images/): basicamente ele vai converter todas as URLs relativas no seu front matter para as imagens geradas com a otimização do Gatsby. O problema é que ele estava reconhecendo o `redirect_from` como uma imagem, por ter uma URL relativa, e consequentemente estava causando erro no build. A única coisa que precisei fazer foi adicionar o `redirect_from` no atributo `exclude` nas configurações do plugin dentro do meu `gatsby-config.js`:

```jsx
{
  resolve: `gatsby-remark-relative-images`,
  options: {
    name: "uploads",
    staticFolderName: 'static',
    include: ['thumbnail'],
    exclude: ['redirect_from'],
  }
}
```

Deixei até redundante pois inseri a `thumbnail` dentro do `include` e o `redirect_from` no `exclude`. No final, funcionou perfeitamente. Fica apenas de lembrete para caso eu queira adicionar ou excluir campos para serem processados por esse plugin.

## Colocando no ar

O Netlify CMS foi feito pela Netlify, o que faz com que o processo de deploy de todo o blog seja bem automatizado, visto que a Netlify tem suporte nativo para Gatsby, bastando apenas fazer o login OAuth com o GitHub para conectar o repositório no próprio Netlify. Ah, o Netlify também é gratuito, tendo alguns planos pagos.

Único ponto de atenção que tive de ter foi em relação ao CMS. Eu estava recebendo um erro ao tentar fazer o login com o GitHub no CMS. Bastou apenas fazer os passos de acordo com o link abaixo para configurar o CMS de forma correta.

<https://docs.netlify.com/visitor-access/oauth-provider-tokens/#using-an-authentication-provider>

E pronto!

Foi um processo muito bom de aprendizado durante o desenvolvimento desse blog. Gatsby é incrível e bastante customizável. Tenho planos de adicionar outras collections dentro do meu Netlify CMS para tirar o foco apenas de Posts.