import { Avatar, Dropdown, Navbar } from "flowbite-react";
import HeaderButton from "./HeaderButton";
import HeaderTab from "./HeaderTab";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../../store/modal";
import ModalCom from "../ModalCom";
import LoginForm from "../LoginForm";
import { useState } from "react";

export default function Headers() {
    const dispatch = useDispatch();
    const [isRegisterForm, setRegister] = useState(false);
    const showModal = useSelector((state) => state.Bmodal.isShow);

    const handleShow = () => {
        dispatch(modalActions.showModal());

    };
    const closeModal = () => {
        dispatch(modalActions.hideModal());
    }
    const registerClick = () => {
        setRegister(true);
        dispatch(modalActions.showModal());
    }
    const loginClick = () => {
        setRegister(false);
        dispatch(modalActions.showModal());
    }

    return (
        <>
            {showModal && <ModalCom isShow={showModal} setOpen={closeModal}> <LoginForm isregister={isRegisterForm}></LoginForm> </ModalCom>}

            <Navbar
                fluid={true}
                rounded={true}
                className="sticky top-0 z-10  ">
                <div className="flex self-start   ">
                    <Navbar.Brand href="https://flowbite.com/" className="items-start" >
                        <img
                            src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo"
                        />
                        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-pink-600 text-pink-600">
                            Airbnb
                        </span>
                    </Navbar.Brand>
                </div>

                <div className="flex self-start  md:order-2">
                    <Dropdown
                        arrowIcon={false}
                        inline={true}
                        label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded={true} />}
                    >

                        <Dropdown.Item>
                            <span onClick={registerClick}>Register</span>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <span onClick={loginClick}>Login</span>
                        </Dropdown.Item>
                    </Dropdown>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <HeaderButton></HeaderButton>
                    {/* <HeaderTab></HeaderTab> */}
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}
