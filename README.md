# A simple csv-to-json converter

Created for an introduction to node.js, this script converts a csv provided via command line  to JSON and writes it to a file named 'customer-data.json'.

## Dependencies
fs and csvtojson must be installed - use 'npm install' to install them

## Use Case 
Imagine you work at a Bitcoin exchange and you have customer information coming from another source: SSN, credit card and their bitcoin numbers. However, the file format is CSV and your exchange can only support JSON. Your task is to write a Node script to convert CSV into JSON.

run with 'node csv-to-json.js {csvFilename}'