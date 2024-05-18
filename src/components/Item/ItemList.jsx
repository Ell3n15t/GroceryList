export default function ItemList(props) {
    return (
        <div>
            {props.list.length > 0 ? (
                <ul>
                    {props.list.map((item) => (
                        <li key={item.id}>{item.name}</li>
                    ))}
                </ul>
            ) : (
                <div className="text-center text-white">
                    <p>La lista è vuota.</p>
                </div>
            )}
        </div>
    );
}
