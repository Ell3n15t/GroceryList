import Header from "../components/Layout/Header"
import Content from "../components/Layout/Content"

export default function Standard({ children }) {
    return (
        <div class="container mt-3 mx-auto">
            <Header />
            <Content>
                {children}
            </Content>
        </div>
    )
}