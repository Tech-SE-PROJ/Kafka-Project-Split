async function ksqlquery() {
    
    var myHeaders = new Headers();
  myHeaders.append("Authorization", "Basic RlpTMzRMWk01R0ZDS0pCNzp0cmZscjE2OW9RVFFqTTVFUk5tOXdiUGZFbE93RktrZ1ZLZUswQjdwZURNYm1pcGF1MjlpQVppV0lUT3R1ZENN");
  myHeaders.append("Content-Type", "text/plain");
  
  var raw = "{\r\n    \"ksql\": \"DESCRIBE USERS EXTENDED;\"\r\n}";
  
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  
    const response = await fetch("https://pksqlc-w6265.us-east-2.aws.confluent.cloud:443/ksql", requestOptions)
    .then(response => response.text())
    .then(result => result)
    .catch(error => console.log('error', error));
    
    return response;
  }

module.exports = ksqlquery;
