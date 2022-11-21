async function ksqlquery() {
    
    var myHeaders = new Headers();
  myHeaders.append("Authorization", "Basic RzdaSlUyNzNVSk1XWlFUWjovTFdnbW5Hd1FKMExycXBKVnBaMTQwNnJ1dmtNbHpyYkg2Wnp5THd1VmJYZTgyTTFTczFiRUJHTXQ4SGIrTlBm");
  myHeaders.append("Content-Type", "text/plain");
  
  var raw = "{\r\n    \"ksql\": \"DESCRIBE USERS EXTENDED;\"\r\n}";
  
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  
    var response = await fetch("https://pksqlc-w6265.us-east-2.aws.confluent.cloud:443/ksql", requestOptions)
    .then(response => response.json())
    .then(result => result)
    .catch(error => console.log('error', error));
    console.table(response)
    for (var key in response) {
      if (response.hasOwnProperty(key)) {
          var values = response[key];
          // "key" will be obj1, obj2 ...
      }
  }
  //moreValues = Object.keys(values)
    //response = Object.entries(response)
    //console.log(response.values)
    //console.log(Object.keys(values))
    //console.log(typeof(values))
    //console.log(jsonVal)
    //console.log(moreValues)
    //console.log(moreValues['@type'])
    //console.log(response['sourceDescription'])
    //var x = JSON.parse(response)
    //console.log(values)
    console.log(values.sourceDescription)
    //console.log(x)
    return response;

  }

module.exports = ksqlquery;
