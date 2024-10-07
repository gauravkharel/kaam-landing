import React from 'react';
import mainlogo from '../public/mainlogo.svg'
import menu from '../public/menu.png'
interface Props {
    // Define your props here
}


const Header: React.FC<Props> = () => {
    return (
        <section className='bg-pale-blue '>
            <div className='flex flex-row justify-between h-[80px] px-5 pt-5'>
                <div>
                    <img src={mainlogo} className='w-12 h-12' />
                </div>
                <div className=''>menu</div>
                <div className='pt-1 visible sm:hidden md:hidden lg:hidden'>
                    <img src={menu} className='w-6 h-6' />
                </div>
            </div>
        </section>
    );
};

export default Header;