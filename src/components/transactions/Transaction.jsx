export default function Transaction(props) {
  const { name, price, available } = props;
  const status = available ? "beschikbaar" : "niet beschikbaar";

  return (
    <div>
      <p>
        <strong>Motor:</strong> {name}
      </p>
      <p>
        <strong>Status:</strong> {status}
      </p>
      <p>
        <strong>Prijs:</strong> €{price}
      </p>
    </div>
  );
}
