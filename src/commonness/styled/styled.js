import styled, { createGlobalStyle, css } from 'styled-components';

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

article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section{
   display: block;
}

/* clears the 'X' from Internet Explorer */
input[type=search]::-ms-clear {  display: none; width : 0; height: 0; }
input[type=search]::-ms-reveal {  display: none; width : 0; height: 0; }

/* clears the 'X' from Chrome */
input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration { display: none; }

input[type="search"] {
  -webkit-appearance: none;
}

html{
  -webkit-touch-callout:none;
  -webkit-user-select:none;
  -webkit-tap-highlight-color:rgba(255, 255, 255, 0.4);
  scroll-behavior:smooth;
}

body{
  line-height: 1;  
  max-width: 768px;
  margin: 0px auto; 
  -webkit-text-size-adjust: none;
}

.App {
  background-color: blueviolet;
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

table{
   border-collapse: collapse;
   border-spacing: 0;
}

a{
   text-decoration: none;
   color: #000;
}

img{
   width: 100%;
}  

.text-ellipsis{
overflow:hidden; 
text-overflow:ellipsis; 
white-space:nowrap;
}

.red { color: #ff2f4a !important; }
.gray { color: #999999 !important; }
.blue { color: #358fff !important; }
  
@media screen and (min-width: 600px){
  .responsiveCol {
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;

    .res-col {      
      width: 50%;
      vertical-align: top;
    }
    
    .res-col-h {       
      width: 50%;
      vertical-align: top;
      padding: 2px;
    }
  }
}
`;

export const StyledWrapperPaddingSide = {
  padding: '26px 16px 22px',
};

const animateCSS = ` 
  animation-duration: 0.4s;
  animation-fill-mode: forwards; 
  transform: translateY(0px);
`;

export const animateViewDownShow = `    
  display: block;
  animation-name: animateViewDownShow;
  opacity: 0;    
  animation-duration: 0.4s;
  animation-fill-mode: forwards;  
    
  @keyframes animateViewDownShow {
   from {       
     opacity: 0;
     transform: translateY(-30px);
   }
  
   to {        
     opacity: 1;        
     transform: translateY(0);
   }
  }
`;

export const animateViewShow = `    
  display: block;
  animation-name: slideUpList;
  opacity: 1;
  overflow: hidden;
  height: auto;
  ${animateCSS}  
  
  @keyframes slideUpList {
   from {       
     opacity: 0;
     transform: translateY(-10px);
   }
  
   to {        
     opacity: 1;        
     transform: translateY(0);
   }
  }
`;

export const animateViewHide = `
  display: block;
  animation-name: slideDownList;
  visibility: hidden;
  overflow: hidden;
  height: 0;
  ${animateCSS}
      
  @keyframes slideDownList {
   from {    
     height: auto;
     opacity: 1;
     visibility: visible;
     transform: translateY(0px);
   }

   to {        
     height: 0;     
     opacity: 0;        
     visibility: hidden;
     transform: translateY(-10px);
   }
  }
`;

export const ListAnimateView = styled.div`
  display: none;
  ${(props) => props.hide && animateViewHide}
  ${(props) => !props.hide && animateViewShow}
`;
