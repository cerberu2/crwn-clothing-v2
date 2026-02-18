import { styled } from 'styled-components';
import Button from "../button/button.component";

export const SignUpContainer = styled.div`
    display: flex;
    flex-direction: column;     
    width: 380px;
`

export const SignUpTitle = styled.h2`
    margin: 10px 0;
`

export const SignUpContainerForm = styled.form`
    display: flex;
    flex-direction: column;
`       

export const SignUpButton = styled(Button)`
     margin-top: 20px;
`   