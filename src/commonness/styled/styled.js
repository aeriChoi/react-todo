import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root{
   --color-sunFlowerYellow: #ffd200;
   --color-darkBrown: #5e5050;
   --color-coralRed: #ff4d56;
   --color-Grey: #777777;
   --color-borderGrey: #e5e5e5;
   --color-blue: #1890ff;
   --color-green: #71d271;
}

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
time, mark, audio, video, button{
   margin: 0;
   padding: 0;
   border: 0;
   font-size: 100%;
   font: inherit;  
   letter-spacing: 0.2px;
   font-family: HelveticaNeue, sans-serif;
   vertical-align: baseline;
   box-sizing: border-box;  
}

html{
  -webkit-touch-callout:none;
  -webkit-user-select:none;
  -webkit-tap-highlight-color:rgba(255, 255, 255, 0.4);
  scroll-behavior:smooth;
}

body{
  line-height: 1;  
  width: 100%;
  background-color: #2193b0;
  -webkit-text-size-adjust: none;
}

ol, ul{
   list-style: none;
}

blockquote, q{
   quotes: none;
}

blockquote:before, blockquote:after,
q:before, q:after{
   content: '';
   content: none;
}
`;
