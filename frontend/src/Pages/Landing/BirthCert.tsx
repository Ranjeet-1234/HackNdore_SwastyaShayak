
const fetchData = function fetchingData() {
  console.log('fetching data')
}

function BirthCert() {
  return (
    <>
      <form onSubmit={fetchData}>
          <input type="text"/>
          <button>Submi</button>
      </form>
    </>
  )
}

export default BirthCert