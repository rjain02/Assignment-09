import json

def lambda_handler(event, context):
 
    parameter = event['queryStringParameters']
    
    
    return {'statusCode':200,
        'body':"Riya Jain says "+str(parameter['keyword'])
    }