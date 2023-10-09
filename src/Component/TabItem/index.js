import './index.css'

const TabItem = props => {
  const {tabDetails, onClickingTab, isActive} = props
  const {tabId, displayText} = tabDetails

  const onClickTabItem = () => {
    onClickingTab(tabId)
  }

  const activeTabClassName = isActive ? 'active-tab-btn' : null

  return (
    <li className="tabs-container">
      <button
        type="button"
        className={`each-tab ${activeTabClassName}`}
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
