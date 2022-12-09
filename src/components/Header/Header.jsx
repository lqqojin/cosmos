export default function Header({ filters, filter, onFilterChange}) {
	console.log({filters, filter})
	return (
		<div>
			<ul>
				{
					filters.map((value, index) => (
						<li key={index}>
							<button onClick={() => onFilterChange(value)}>{value}</button>
						</li>
					))
				}
			</ul>
		</div>
	);
}
