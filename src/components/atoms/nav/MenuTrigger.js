import React, { useState } from 'react';
import { Pivot as Hamburger } from 'hamburger-react';
import Menu from '../../molecules/Menu';
import './_menutrigger.style.scss';

function HamburgerTrigger() {
    const [isOpen, setOpen] = useState(false);

    return (
        <div>
            <div className='hamburger-icon'>
                <Hamburger
                    toggled={isOpen}
                    toggle={setOpen}
                    color='white'
                    size={24}
                />
            </div>
            {isOpen && <Menu closeMenu={() => setOpen(false)} />}
        </div>
    );
}

export default HamburgerTrigger;