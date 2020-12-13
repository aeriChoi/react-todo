import styled from "styled-components";
import {animateViewShow} from './animate';

export const StyledLayout = styled.article`
  width: 80%;
  max-width: 760px;
  min-width: 280px;
  margin:  30px auto;
  padding: 20px 15px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0px 12px 40px rgba(0,0,0,0.5);
  
  .ant-form-item-label {
    text-align: left;
  }
  
  .ant-btn-primary {
    display: block;
    width: 80%;
    height: 50px;
    margin: 0 auto;
    border: 0;
    border-radius: 25px;
    font-size: 16px;
    font-weight: 600;
    background: linear-gradient(269.43deg, #3B5BC2 0%, #417FE9 100%);
  }
  ${animateViewShow}
`;

export const FormWrapper = styled.section`
  max-width: 460px;
  margin: 0 auto;
`;

export const ListWrapper = styled.section`
  margin-top: 30px;
`;