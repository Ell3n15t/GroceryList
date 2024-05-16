export default function Title(props) {
    const { title, subtitle = "" } = props;
    return (
        <div>
            <h1>{title}</h1>
            {subtitle !== "" && <h2>{subtitle}</h2>}
        </div>
    );
}
