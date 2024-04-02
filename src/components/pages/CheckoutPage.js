import { Link } from 'react-router-dom';
import Text from '../atoms/Texts/Text';
import Footer from "../molecules/Footer";
import Header from "../molecules/Header";
import Button from "../atoms/Buttons/Button";
import './_checkoutpage.styles.scss';

function ThanksPage() {
    return (
        <div>
            <div className="Header3">
              <Header />
            </div>
            <div className="content2">
                <Text content="Thank you." />
                <Text content="Your order will be sent soon!" />
                <Link to='/' className='backToHome'>
                    <Button variant={'secondary'} label={'Go back to home page'} />
                </Link>
            </div>
            <Footer />
        </div>
    );
}

export default ThanksPage;