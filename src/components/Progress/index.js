import styled from 'styled-components';

const  Progress  =  styled.div`
  position:  fixed;
  background:  linear-gradient(
    to right,
    #8b0817 ${props => props.scroll},
    transparent  0);
  width:  100%;
  height:  4px;
  margin-top: 98px;
`;

export  default  Progress;