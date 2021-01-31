import pageNotFoundImg from '../../images/404-error.jpg'
import './PageNotFound.css'

function PageNotFound() {
    return (
        <div className="errorImgWrapper">
            <img style={{width:'100vh'}} src={pageNotFoundImg} alt="404 error"/>
        </div>
    );
}

export default PageNotFound;