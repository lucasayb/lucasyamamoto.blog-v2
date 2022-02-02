import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
ul, ol {
	list-style: none;
	margin: 0;
	padding: 0;
}
* {
	box-sizing: border-box;
}
body {
	--main-background-color: #0a061c;
	--main-text-color: #ffffff;
	--main-border-color: #30336b;
	--main-icon-color: #ffffff;
  --secondary-text-color: #ffffff;
  --main-link-color: #686de0;
	--main-codeblock-border-color: #30336b;
	--main-codeblock-background-color: #0e0826;
	--main-table-nth-child-even-color: #140f2b;
	--main-table-border-color: #1e173d;
	--main-blockquote-border-color: #1e173d;
	--main-blockquote-text-color: #bca7e5;
}
body.light {
	/* Coming soon */
	--main-codeblock-border-color: #404040;
	--main-codeblock-background-color: #212121;
}
body {
	background-color: var(--main-background-color);
  font: 400 18px/1.5 'Roboto', sans-serif;
  color: var(--main-text-color);
  -webkit-text-size-adjust: 100%;
  -webkit-font-feature-settings: "kern" 1;
  -moz-font-feature-settings: "kern" 1;
  -o-font-feature-settings: "kern" 1;
	-webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-feature-settings: "kern" 1;
  font-kerning: normal;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  overflow-wrap: break-word;
}
a {
  color: var(--main-link-color);
  display: flex;
  border-bottom: 1px dashed var(--main-link-color);
}
`

export default GlobalStyles