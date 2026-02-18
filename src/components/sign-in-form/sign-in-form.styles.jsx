import { styled } from "styled-components";
import Button from "../button/button.component";

export const SignInContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 380px;
`

export const SignInTitle = styled.h2`
    margin: 10px 0;
`

export const SignInContainerForm = styled.form`
    display: flex;
    flex-direction: column;
`

export const SignInButton = styled(Button)`
     margin-top: 20px;
`

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
`