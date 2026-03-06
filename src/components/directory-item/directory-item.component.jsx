import {BackgroundImage, Body, DirectoryItemContainer} from  './directory-item.styles';
import { useNavigate } from 'react-router-dom'; 

const DirectoryItem = ({category}) => {
    const { id, title, imageUrl, linkUrl } = category;
    const navigate = useNavigate();
    return (
        <DirectoryItemContainer key={id} onClick={() => navigate(linkUrl)}>
            <BackgroundImage $imageUrl={imageUrl} />
            <Body>
                <h2 >{title}</h2>
                <p>Shop Now</p>
            </Body>
        </DirectoryItemContainer>
    );
};

export default DirectoryItem;