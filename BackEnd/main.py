from typing import Optional
from fastapi import FastAPI
import json
from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse
from pydantic import BaseModel
from datetime import date
import mysql.connector
from fastapi.openapi.models import Response
from fastapi.middleware.cors import CORSMiddleware


app=FastAPI()

origins = [
    "http://localhost",
    "http://localhost:4200",
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
class matqs(BaseModel):
    matricule : str

class Voiture(BaseModel):
    matricule : str
    nb_place : int
    nb_porte : int 
    type_boite : int
    espace : int
    climatisation : int
    prix : int 
    marque : str
    modele : str
    imagev : str

class Location(BaseModel):
    id_location : int
    matricule_v : str
    cin_c : int 
    date_debut : date 
    date_fin : date

class Client(BaseModel):
    cin : int
    nom: str
    prenom : str
    dn : date 
    email : str
    tel : int
    adresse : str 
class admin(BaseModel):
    username:str
    password:str


@app.get("/affichevmoidifer")
def voiture_list(mat:str):
    mydb = mysql.connector.connect(host="localhost",user="root",password="",database="db_location")
    mycursor = mydb.cursor()
    ch="SELECT * FROM voiture where matricule='"+mat+"'"
    mycursor.execute(ch)
    row_headers=[x[0]for x in mycursor.description]
    myresult = mycursor.fetchall()
    json_data=[]
    for result in myresult:
        json_data.append(dict(zip(row_headers,result)))
    return json_data

@app.get("/affichev")
def voiture_list():
    mydb = mysql.connector.connect(host="localhost",user="root",password="",database="db_location")
    mycursor = mydb.cursor()
    ch="SELECT * FROM voiture "
    mycursor.execute(ch)
    row_headers=[x[0]for x in mycursor.description]
    myresult = mycursor.fetchall()
    json_data=[]
    for result in myresult:
        json_data.append(dict(zip(row_headers,result)))
    return json_data

@app.get("/3voiteur")
def voiture_list2():
    mydb = mysql.connector.connect(host="localhost",user="root",password="",database="db_location")
    mycursor = mydb.cursor()
    ch="SELECT * FROM `voiture` GROUP BY `matricule` ORDER BY `matricule`  LIMIT 3"
    mycursor.execute(ch)
    row_headers=[x[0]for x in mycursor.description]
    myresult = mycursor.fetchall()
    json_data=[]
    for result in myresult:
        json_data.append(dict(zip(row_headers,result)))
    return json_data

@app.get("/matricule")
def voiture_list():
    mydb = mysql.connector.connect(host="localhost",user="root",password="",database="db_location")
    mycursor = mydb.cursor()
    ch="SELECT matricule  FROM voiture"
    mycursor.execute(ch)
    row_headers=[x[0]for x in mycursor.description]
    myresult = mycursor.fetchall()
    json_data=[]
    for result in myresult:
        json_data.append(dict(zip(row_headers,result)))
    return json_data

@app.get("/affichel")
def location_list():
    mydb = mysql.connector.connect(host="localhost",user="root",password="",database="db_location")
    mycursor = mydb.cursor()
    ch="SELECT * FROM location"
    mycursor.execute(ch)
    row_headers=[x[0]for x in mycursor.description]
    myresult = mycursor.fetchall()
    json_data=[]
    for result in myresult:
        json_data.append(dict(zip(row_headers,result)))
    return json_data



@app.get("/login")
def login():
    mydb = mysql.connector.connect(host="localhost",user="root",password="",database="db_location")
    mycursor = mydb.cursor()
    ch="SELECT * FROM admin"
    mycursor.execute(ch)
    row_headers=[x[0]for x in mycursor.description]
    myresult = mycursor.fetchall()
    json_data=[]
    for result in myresult:
        json_data.append(dict(zip(row_headers,result)))
    return json_data
    

@app.post("/ajout_voiture")
def ajout(voiture : Voiture):
    mydb = mysql.connector.connect(host="localhost",user="root",password="",database="db_location")
    mycursor = mydb.cursor()
    ch="insert into voiture(matricule, nb_place, nb_porte ,type_boite,espace ,climatisation ,prix ,marque ,modele,imagev) values ("+"'"+voiture.matricule+"',"+str(voiture.nb_place)+","+str(voiture.nb_porte)+","+str(voiture.type_boite)+","+str(voiture.espace)+","+str(voiture.climatisation)+","+str(voiture.prix)+",'"+voiture.marque+"',"+"'"+voiture.modele+"'"+",'"+voiture.imagev+"');"
    mycursor.execute(ch)
    mydb.commit()
    return "succefully inserted"

@app.delete("/supprimer")
async def supprimer(id:str):
    mydb = mysql.connector.connect(host="localhost",user="root",password="",database="db_location")
    mycursor = mydb.cursor()
    ch='DELETE FROM `voiture` WHERE `voiture`.`matricule` = "'+id+'"'
    print(ch)
    mycursor.execute(ch)
    mydb.commit()
    return {"message":f" {id} successfully deleted"}

@app.post("/ajout_client")
def ajout(client : Client):
    mydb = mysql.connector.connect(host="localhost",user="root",password="",database="db_location")
    mycursor = mydb.cursor()
    ch="insert into client(cin,nom, prenom, dn,email,tel,adresse) values ("+str(client.cin)+","+"'"+client.nom+"',"+"'"+client.prenom+"',"+"'"+str(client.dn)+"',"+"'"+client.email+"',"+str(client.tel)+","+"'"+client.adresse+"');"
    mycursor.execute(ch)
    mydb.commit()
    return "succefully inserted"

@app.post("/modifier_voiture")
def modifier(voiture : Voiture):
    mydb = mysql.connector.connect(host="localhost",user="root",password="",database="db_location")
    mycursor = mydb.cursor()
    ch="update voiture set nb_place="+str(voiture.nb_place)+", nb_porte="+str(voiture.nb_porte)+", type_boite="+str(voiture.type_boite)+" ,espace="+str(voiture.espace)+" ,climatisation="+str(voiture.climatisation)+",prix="+str(voiture.prix)+" ,marque='"+voiture.marque+"', modele="+"'"+voiture.modele+"',imagev="+"'"+voiture.imagev +"' where matricule="+"'"+voiture.matricule+"';"
    mycursor.execute(ch)
    mydb.commit()
    return {"message":f" {voiture.matricule} successfully modified"}
@app.post("/supprimel")
def supprimel(id:int):
    mydb = mysql.connector.connect(host="localhost",user="root",password="",database="db_location")
    mycursor = mydb.cursor()
    ch=f"DELETE FROM location where id_location={id}"
    mycursor.execute(ch)
    mydb.commit()
    return {"message":f" {id} successfully Supprime"}

@app.post("/ajout_location")
def ajout(location : Location):
    mydb = mysql.connector.connect(host="localhost",user="root",password="",database="db_location")
    mycursor = mydb.cursor()
    ch="insert into location(matricule_v,cin_c,date_debut,date_fin) values('"+location.matricule_v+"',"+str(location.cin_c)+",'"+str(location.date_debut)+"'"+",'"+str(location.date_fin)+"'"+");"
    mycursor.execute(ch)
    mydb.commit()
    return {"messager":"succefully inserted"}
