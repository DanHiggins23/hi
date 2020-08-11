import styled from 'styled-components';

const  Progress  =  styled.div`
  position:  fixed;
  background:  linear-gradient(
    to right,
    #90a4ae ${props => props.scroll},
    transparent  0);
  width:  100%;
  height:  6px;
  margin-top: 100px;
`;

export  default  Progress;