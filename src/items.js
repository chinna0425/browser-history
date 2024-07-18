import './App.css'

const ItemsContainer = props => {
  const {eachitem, deletecontainer} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = eachitem
  const deleteitem = () => {
    deletecontainer(id)
  }
  return (
    <li className="list-items">
      <div className="flex-items-container">
        <p>{timeAccessed}</p>
        <div className="listbrowseitems">
          <img src={logoUrl} alt="domain logo" className="logos" />
          <p className="title">{title}</p>
          <p className="domainurl">{domainUrl}</p>
        </div>
      </div>
      <button
        type="button"
        className="delete-container"
        onClick={deleteitem}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png "
          alt="delete"
        />
      </button>
    </li>
  )
}
export default ItemsContainer
