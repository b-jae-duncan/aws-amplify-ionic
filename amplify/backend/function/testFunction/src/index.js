/* Amplify Params - DO NOT EDIT
	API_IONICAMPLIFY_GRAPHQLAPIENDPOINTOUTPUT
	API_IONICAMPLIFY_GRAPHQLAPIIDOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

const https = require("https");
const AWS = require("aws-sdk");
const urlParse = require("url").URL;
const appsyncUrl = process.env.API_IONICAMPLIFY_GRAPHQLAPIENDPOINTOUTPUT;
const region = process.env.REGION;
const endpoint = new urlParse(appsyncUrl).hostname.toString();
const graphqlQuery = require("./query.js").mutation;

exports.handler = async (event) => {
  const req = new AWS.HttpRequest(appsyncUrl, region);

  req.method = "POST";
  req.path = "/graphql";
  req.headers.host = endpoint;
  req.headers["Content-Type"] = "application/json";
  req.body = JSON.stringify({
    query: graphqlQuery,
    operationName: "updateTodo",
    variables: {
          input: {
            "id": "22a41395-a8c1-4b55-88a0-436721086bef",
            "description": "start work"
          }
        }
  });

  const signer = new AWS.Signers.V4(req, "appsync", true);
  signer.addAuthorization(AWS.config.credentials, AWS.util.date.getDate());

  const data = await new Promise((resolve, reject) => {
    const httpRequest = https.request({ ...req, host: endpoint }, (result) => {
      let data = "";

            result.on("data", (chunk) => {
                data += chunk;
            });

            result.on("end", () => {
                resolve(JSON.parse(data.toString()));
            });
    });

    httpRequest.write(req.body);
    httpRequest.end();
  });

  console.log({data})
  return {
    statusCode: 200,
    body: data,
  };
};