async function ksqlquery(input) {
  var myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    "Basic RzdaSlUyNzNVSk1XWlFUWjovTFdnbW5Hd1FKMExycXBKVnBaMTQwNnJ1dmtNbHpyYkg2Wnp5THd1VmJYZTgyTTFTczFiRUJHTXQ4SGIrTlBm"
  );
  myHeaders.append(
    "Content-Type",
    "text/plain",
    "Access-Control-Allow-Origin: *"
  );
    console.log(input)
  var raw = `{\r\n    "ksql": "DESCRIBE ${input} EXTENDED;"\r\n}`;

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  var response = await fetch(
    "https://pksqlc-w6265.us-east-2.aws.confluent.cloud:443/ksql",
    requestOptions
  )
    .then((response) => response.json())
    .catch((error) => console.log("error", error));
  for (var key in response) {
    if (response.hasOwnProperty(key)) {
      var values = response[key];
    }
  }
  //console.log(values)
  return values;
}

module.exports = ksqlquery;
