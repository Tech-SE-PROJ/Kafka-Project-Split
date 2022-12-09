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
  console.log(values)
  return values;

  //console.table(values)
  console.log(values.sourceDescription.name);
  console.log(values.sourceDescription.type);
  console.log(values.sourceDescription.keyFormat);
  console.log(values.sourceDescription.valueFormat);
  console.log(values.sourceDescription.topic);
  console.log(values.sourceDescription.partitions);
  console.log(values.sourceDescription.replication);
  console.log(values.sourceDescription.statement);
  if (values.sourceDescription.clusterStatistics.type !== undefined) {
    for (var key in values.sourceDescription.clusterStatistics) {
      if (values.hasOwnProperty(key)) var keyStats = values[key];
    }
    console.log(keyStats.name); //date constructor
    console.log(keyStats.host);
    console.log(keyStats.value);
    console.log(keyStats.timestamp);
  } else {
    console.log("clusterStatistics is empty");
  }
  if (values.sourceDescription.clusterErrorStats.type !== undefined) {
    for (var key in values.sourceDescription.clusterErrorStats) {
      if (values.hasOwnProperty(key)) var keyStats = values[key];
    }
    console.log(keyStats.name); //date constructor
    console.log(keyStats.host);
    console.log(keyStats.value);
    console.log(keyStats.timestamp);
  } else {
    console.log("clusterErrorStats is empty");
  }
  return response;
}

module.exports = ksqlquery;
