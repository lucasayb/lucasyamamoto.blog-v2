---
title: Colocando espaçamento entre um underline nativamente com CSS
date: 2022-02-11 12:00:00
thumbnail: /assets/uploads/text-underline-offset.png
category: Development
color: "#e74c3c"
description: E não, não é com border-bottom
---
Em busca de uma forma de colocar um espaçamento um link e o underline dele, estava indo na linha de utilizar um border-bottom que, apesar de ser uma solução fácil e interessante, pode acarretar em textos como esse:

![Link com um underline estranho durante uma quebra de linha no uso de border-bottom](/assets/uploads/screen-shot-2022-02-04-at-01.43.png "Link com um underline estranho durante uma quebra de linha no uso de border-bottom")

Eu poderia simplesmente deixar um text-decoration: underline padrão, mas isso não ia causar o efeito que eu gostaria no meu blog.

Acontece que desde Outubro de 2021, foi divulgado a propriedade `text-underline-offset`, que estava em desenvolvimento pelo time da W3C desde 2019 se não me engano, agora suporta boa parte dos navegadores modernos:

![Tabela do Can I Use mostrando apenas o internet explorer, dos navegadores modernos, como o que não suporta a propriedade](/assets/uploads/screen-shot-2022-02-04-at-01.47.09.png "Tabela do Can I Use mostrando apenas o internet explorer, dos navegadores modernos, como o que não suporta a propriedade")

De acordo com o Can I Use, basicamente todos os navegadores modernos são suportados, exceto pelo Internet Explorer, pra variar.

![Joey feliz com o text-underline-offset](/assets/uploads/joeynice.gif "Joey feliz com o text-underline-offset")

## Como implementá-la?

Na verdade, não tem muito segredo. Basta apenas adicioná-la nas classes que já possuem o `text-decoration: underline` da seguinte forma:

```css
a {
	text-decoration: underline;
	text-decoration-style: dashed;
    text-underline-offset: 0.4rem; /* Porcentagens e Pixels também são aceitos */
}
```

> Sem o `text-underline-offset`

![Link sem o text-underline-offset](/assets/uploads/screen-shot-2022-02-04-at-01.52.33.png "Link sem o text-underline-offset")

> Com o `text-underline-offset`

![Link com o text-underline-offset](/assets/uploads/screen-shot-2022-02-04-at-01.53.46.png "Link com o text-underline-offset")

Na documentação oficial da Mozilla também é citado que, como muitas outras propriedades do CSS, essa também aceita valores globais:

```css
text-underline-offset: inherit;
text-underline-offset: initial;
text-underline-offset: revert;
text-underline-offset: unset;
text-underline-offset: auto;
```

A porcentagem como valor também é uma opção interessante, visto que ela buscará o valor do tamanho da fonte como relativo para que seu tamanho seja calculado.

Além disso, não preciso nem dizer que só funciona com `text-decoration: underline`, né?