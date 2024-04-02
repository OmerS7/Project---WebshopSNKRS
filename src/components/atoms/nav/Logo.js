import { Link } from 'react-router-dom';
import LogoIcon from '../../styles/icons/snkrs-logo.svg'
import './_logo.styles.scss';

const Logo = () => {
    return (
        <div>
        <Link to="/">
        <img src={LogoIcon} alt='Logo SNKRS' className="logo"/>
        </Link>
        </div>
    );
}

export default Logo;