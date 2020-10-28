// De eerste stap is de data inladen
const selectedCollumn = 'areaid'
const capacityCollumn = 'capacity'

getData('https://opendata.rdw.nl/resource/b3us-f26s.json')
  .then(result => {
      return result.json()
      })
  .then(RDWdata =>{
    const areaidslist = oneCollumn(RDWdata, 'areaid')
    const garageCapacity = oneCollumn(RDWdata, 'capacity')
    console.log('dit is de RDW data:', RDWdata)
    console.log ('dit is 1 tabel van de RDWdata:', RDWdata[0])
    console.log ('dit zijn de uniqueids', areaidslist)
    console.log("dit zijn de capacity's", capacityCollumn)
    const vollePlekken = noCapacity(garageCapacity)
    console.log('dit zijn de volle parkeergarages:', vollePlekken)
    //tweede oefening voor .map
    // const areaidslist2 = RDWdata.map(RDWdata => selectedCollumn) Kan dit met een API wel zo kort?

})
function getData(url) {
 return fetch (url)
}

function oneCollumn(uniqueArray, key){
return uniqueArray.map(item => item[key])
}

function noCapacity(dataArray) {
 let fullParking = []
 dataArray.foreach(item => {
    if (dataArray <= 0)
    fullParking.push(item)
 })
  return fullParking  
}