export default function MotorItem(props) {
  const { name, price, available } = props;
  const status = available ? "beschikbaar" : "niet beschikbaar";

  return (
    <div className="text-bg-dark" style={{ textAlign: "center" }}>
      <p>
        <strong>Motor:</strong> {name}
      </p>
      <p>
        <strong>Status:</strong> {status}
      </p>
      <p>
        <strong>Prijs:</strong> €{price} / dag
      </p>
    </div>
  );
}
