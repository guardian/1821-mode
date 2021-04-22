import Guardian from 'guardian-js';
const apiKey = 'gnm-hackday-21'

const api = new Guardian(apiKey, false);
const apiUrl = "https://content.guardianapis.com/business/2014/feb/18/uk-inflation-falls-below-bank-england-target"

async function getNews() {
    await fetch(apiUrl + "?api-key="+ apiKey)
    .then(res => {
        return  res.json()
    })
  
}

  //  const responseData = await response.json();
  //  return responseData



function Api() {
    
    // // const test = api.item.getById('business/2014/feb/18/uk-inflation-falls-below-bank-england-target')
    //             .then((response) => {
    //              let text = response.body;
    //             return text
    //     });   
    
    let test = getNews();
    console.log(test)
    return (
        <div>
            <h1>${test}</h1>
        </div>
    )
} 


export default Api
