import './index.css'

const Pricerange = [
    {id:1,priceRange: '20L and above'},
    {id:2,priceRange: '50L and above'},
    {id:3,priceRange: '1Cr and above'},
    {id:4,priceRange: '2Cr and above'},
]

const Locations = [
    {id:'Ban',location: 'Bangalore'},
    {id:'Hyd',location: 'Hyderabad'},
    {id:'Del',location: 'Delhi'},
    {id:'Pune',location: 'Pune'},
]

const Bedrooms = [
    {id:"one",Bedroom: 1},
    {id:'two',Bedroom: 2},
    {id:"three",Bedroom: 3},
    {id:'four',Bedroom: 4},
]

const JobFilters = (props) => {
  
  const renderLocationCheckBox = () => {
    const {onChangeLocation} = props
   return Locations.map(eachLoc => {
      const onClickCheckBoxLoc = () => onChangeLocation(eachLoc.id)

      return (
        <li className="list" key={eachLoc.id}>
          <input
            type="radio"
            id={eachLoc.id}
            className="check-box"
            onChange={onClickCheckBoxLoc}
            name='locations'
           
          />
          <label htmlFor={eachLoc.id} className="name-checkbox">
            {eachLoc.location}
          </label>
        </li>
      )
    })
  }

  const renderBedroomsCheckBox = () => {
    const {onChangeBedrooms} = props
   return Bedrooms.map(each => {
      const onClickCheckBoxBed = () => onChangeBedrooms(each.id)

      return (
        <li className="list" key={each.id}>
          <input
            type="radio"
            id={each.id}
            className="check-box"
            onChange={onClickCheckBoxBed}
            name='bedroom-number'
          />
          <label htmlFor={each.id} className="name-checkbox">
            {each.Bedroom} BHK
          </label>
        </li>
      )
    })
  }


  const renderPriceRange = () => {
    const {onChangePrice} = props
    return Pricerange.map(eachRange => {
      const onClickRadioPrice = () => onChangePrice(eachRange.id)

      return (
        <li className="list" key={eachRange.id}>
          <input
            type="radio"
            id={eachRange.id}
            className="radio-box"
            name="PriceRange"
            onChange={onClickRadioPrice}
          />
          <label htmlFor={eachRange.id} className="name-radio">
            {eachRange.priceRange}
          </label>
        </li>
      )
    })
  }

  const renderLocationsContainer = () => (
    <div className="container-list">
      <h1 className="side-header">Locations</h1>
      <ul className="list-container">{renderLocationCheckBox()}</ul>
    </div>
  )

  const renderBedroomsContainer = () => (
    <div className="container-list">
      <h1 className="side-header">No.of Bedromms</h1>
      <ul className="list-container">{renderBedroomsCheckBox()}</ul>
    </div>
  )

  const renderPriceRangeContainer = () => (
    <div className="container-list">
      <h1 className="side-header">Price Range</h1>
      <ul className="list-container">{renderPriceRange()}</ul>
    </div>
  )

  return (
    <div className="job-filter-container">
      <hr className="hr" />
      {renderLocationsContainer()}
      <hr className="hr" />
      {renderPriceRangeContainer()}
      <hr className="hr" />
      {renderBedroomsContainer()}
     
    </div>
  )
}
export default JobFilters