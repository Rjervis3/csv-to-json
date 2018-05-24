
const csv=require('csvtojson')
const fs = require('file-system')

const processCsv = (csvFilePath) => {
	if (process.argv[2] == null) {
		console.log("please supply csv file path!");

	} else {
		csv().fromFile(csvFilePath)
		.on('end_parsed', (jsonArrObj, err)=>{
			if(err)  return process.exit(1); //handle errors for csv
	  		fs.writeFile('customer-data.json', JSON.stringify(jsonArrObj, null, 2), (error)=>{
      			if (error) return process.exit(1) //handle errors for writing file
      			console.log(`customer-data.json written -- ${jsonArrObj.length} customers processed`)
      			process.exit(0)
    		})
		});
	}
}
 
processCsv(process.argv[2])
