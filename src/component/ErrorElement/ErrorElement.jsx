import { Link } from "react-router-dom";

const ErrorElement = () => {
    return (
        <div>
            <p>This page is not found</p>
            <Link to={'/'}><button>Back to home</button></Link>
        </div>
    );
};

export default ErrorElement;