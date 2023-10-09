import './index.css'

const ThumbnailImages = props => {
  const {imgDetails, onClickThumbnailBtn} = props
  const {id, thumbnailUrl} = imgDetails

  const onClickThumbnailImg = () => {
    onClickThumbnailBtn(id)
  }

  return (
    <li className="thumbnail-img-container">
      <button
        type="button"
        className="thumbnail-btn"
        onClick={onClickThumbnailImg}
      >
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-img" />
      </button>
    </li>
  )
}

export default ThumbnailImages
