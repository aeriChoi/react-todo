import {css} from "styled-components";

const animateCSS = css` 
  animation-duration: 0.4s;
  animation-fill-mode: forwards; 
  transform: translateY(0px);
`;

export const animateViewDownShow = css`    
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

export const animateViewShow = css`    
  display: block;
  animation-name: slideUpList;
  opacity: 1;
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