import {BaseButton, GoogleSignInButton,InvertedButton} from  './button.styles.jsx';

export const BUTTON_TYPE_CLASS = {
    base: 'base',
    google: 'google-sign-in',
    inverted: 'inverted',
}

const getButton = (buttonType = BUTTON_TYPE_CLASS.base) => {
    switch (buttonType) {
        case BUTTON_TYPE_CLASS.google:
            return GoogleSignInButton;
        case BUTTON_TYPE_CLASS.inverted:
            return InvertedButton;
        default:
            return BaseButton;
    }
}

const Button = ({ buttonType, children, ...otherProps }) => {
    const CustomButton = getButton(buttonType);
    return <CustomButton {...otherProps}>{children}</CustomButton>
}

export default Button;