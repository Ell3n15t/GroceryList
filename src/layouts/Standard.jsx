import Header from "../components/Layout/Header"
import Content from "../components/Layout/Content"
import Modal from "../components/Global/Modal/Modal"

export default function Standard({ children }) {
    return (
        <div className="container mt-3 mx-auto">
            <Header />
            <Content>
                {children}
            </Content>
            <Modal />
        </div>
    )
}