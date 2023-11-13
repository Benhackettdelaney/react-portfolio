import { useParams } from 'react-router-dom'

const Show = () => {
    const { slug } = useParams();

    return(
        <h2>Show Project: {slug}</h2>
    );
};

export default Show;