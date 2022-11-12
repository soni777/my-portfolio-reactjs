import './index.css'

const TabItem = props => {
  const {tabDetails, onTabChange, isActive} = props
  const {displayText, tabId} = tabDetails
  const active = isActive ? 'active-tab-btn' : ''
  const onTabClick = () => {
    onTabChange(tabId)
  }

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${active}`}
        onClick={onTabClick}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
