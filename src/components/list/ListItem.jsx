import './listitem.scss'

export default function ListItem({value}) {
  return (
    <div className="listitem">
      <div className="innerbox">{value}</div>
    </div>
  )
}
