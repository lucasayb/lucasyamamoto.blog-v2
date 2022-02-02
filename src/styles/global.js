import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
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
body.dark {
	--primary-background-color: #0a061c;
	--primary-text-color: #ffffff;
	--primary-border-color: #30336b;
	--primary-icon-color: #ffffff;
  --secondary-text-color: #ffffff;
  --primary-link-color: #686de0;
	--primary-tag-text-color: #ffffff;
	--primary-codeblock-border-color: #30336b;
	--primary-codeblock-background-color: #0e0826;
	--primary-table-nth-child-even-color: #140f2b;
	--primary-table-border-color: #1e173d;
	--primary-blockquote-border-color: #1e173d;
	--primary-blockquote-text-color: #bca7e5;
}
body.light {
	--primary-background-color: #fff;
	--primary-text-color: #000000;
	--primary-border-color: #eee;
	--primary-icon-color: #000000;
  --secondary-text-color: #ffffff;
  --primary-link-color: #686de0;
	--primary-tag-text-color: #ffffff;
	--primary-codeblock-border-color: #404040;
	--primary-codeblock-background-color: #212121;
	--primary-table-nth-child-even-color: #140f2b;
	--primary-table-border-color: #1e173d;
	--primary-blockquote-border-color: #1e173d;
	--primary-blockquote-text-color: #bca7e5;
}
body {
	background-color: var(--primary-background-color);
	transition: background-color 0.5s;
  font: 400 18px/1.5 'Roboto', sans-serif;
  color: var(--primary-text-color);
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
  color: var(--primary-link-color);
  display: flex;
  border-bottom: 1px dashed var(--primary-link-color);
}
`

export default GlobalStyles