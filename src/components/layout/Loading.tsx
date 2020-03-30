import React, {CSSProperties} from 'react';
import loadingGif from '../../assets/loading.gif'

const loadingStyles: CSSProperties = {
    minHeight: '90vh',
    maxWidth: '100vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    margin: 0
};

const Loading: React.FC = () => {
    return (
        <div style={loadingStyles}>
            <img src={loadingGif} alt="Loading..."/>
        </div>
    )
};

export default Loading;
