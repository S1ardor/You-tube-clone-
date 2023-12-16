import "./modal.css";
import { IoCloseOutline } from "react-icons/io5";

export const Modal = ({title, children, modal, setModal}) => {
   
    return(
        <div className="modal__overlay" style={{display: modal ? "flex": "none"}}>
            <div className="modal">
                <div className="modal__top">
                    <h4>{title}</h4>
                    <button className="border-transparent" onClick={() => setModal(false) }><IoCloseOutline/></button>
                </div>
                <div className="modal__body">
                    {children}
                </div>
            </div>
        </div>
    )
}