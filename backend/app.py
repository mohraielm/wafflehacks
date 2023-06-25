from flask import Flask, jsonify,request
from .secrets import API_KEY,ATLAS_USER,ATLAS_PASS
from tikapi import TikAPI, ValidationException, ResponseException
import os
from flask import send_from_directory



api = TikAPI(API_KEY)

app = Flask(__name__)


from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi

uri = f"mongodb+srv://{ATLAS_USER}:{ATLAS_PASS}@momo.aiulzxv.mongodb.net/?retryWrites=true&w=majority"

# Create a new client and connect to the server
client = MongoClient(uri, server_api=ServerApi('1'))
DB= client["TikTokVids"]

User = api.user(
    accountKey=API_KEY
)


# @app.route("/helloworld", methods=["GET"])
# def hello_world():
#     try:
#         client.admin.command('ping')
#         print("Pinged your deployment. You successfully connected to MongoDB!")
#     except Exception as e:
#         print(e)
#     return jsonify({"message" : "happy"})

if __name__ == "__main__":
    # Send a ping to confirm a successful connection
    app.run(debug=True)
    
@app.route("/findUser",methods=["POST"])
def findUser():
    data=request.json
    print(data)
    
    try:
        response = api.public.check(
        username=data["userName"]
    )
        print(response.json())
        
        #this code adds username to the database
        DB['TiktokVids'].insert_one({"some key": data["userName"],})
        return response.json()


    except ValidationException as e:
        print(e, e.field)

    except ResponseException as e:
        print(e, e.response.status_code)

# @app.route("/likedVids",methods=["POST"])
# def likedVids():
#     user=request.json

#     try:
#         response = User.posts.feed()

#         print(response.json())

#         while(response):
#             cursor = response.json().get('cursor')
#             print("Getting next items ", cursor)
#             response = response.next_items()

#     except ValidationException as e:
#         print(e, e.field)

#     except ResponseException as e:
#         print(e, e.response.status_code)
