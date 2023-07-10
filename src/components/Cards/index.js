import './index.css';

export const Cards = ({imageSrc, imageAlt, text, buttonText}) => {
    return(
        <div className="card">
            <img src={imageSrc} alt={imageAlt} />
            <div className="card-content">
                <h2>{text}</h2>
                <button>{buttonText}</button><br/>
                <img src={imageSrc} className='secondImg' />
            </div>
        </div>
    );
}