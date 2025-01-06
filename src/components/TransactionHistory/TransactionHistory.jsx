import css from './TransactionHistory.module.css';

export default function TransactionHistory({items}) {
    return (
        <table className={css.table}>
        <thead className={css.table_head}>
            <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
            </tr>
        </thead>
        <tbody className={css.table_body}>
        {items.map(({ type, amount, currency, id }) => {
            return <tr key={id}>
                <td className={css.table_type_col}>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
            </tr>
               
        })}
        </tbody>
    </table>)
}