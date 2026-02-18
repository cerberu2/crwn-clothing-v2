import {FormInput, FormInputLabel, Group} from './form-input.styles.jsx';

const FromInput = ({ label, ...otherProps }) => {
    return (
        <Group>
            <FormInput {...otherProps} />
            {label && <FormInputLabel shrink={otherProps.value.length}>{label}</FormInputLabel>}
        </Group>
    )
};

export default FromInput;