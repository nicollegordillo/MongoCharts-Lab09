from pymongo import MongoClient, InsertOne
import pandas as pd

# Leer CSV
df = pd.read_csv('resultados_busqueda.csv')
data = df.to_dict(orient='records')

# Conectar a MongoDB Atlas 
client = MongoClient("mongodb+srv://<db_user>:<db_password>@cluster0.096ukfz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
db = client["busquedas"]
collection = db["simulaciones"]

# Insertar en bulk
operations = [InsertOne(doc) for doc in data]
collection.bulk_write(operations)

print("Datos insertados correctamente.")
