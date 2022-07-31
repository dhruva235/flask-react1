import numpy as np
import pandas as pd
import pickle 
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import Ridge,RidgeCV,Lasso,LassoCV,ElasticNet,ElasticNetCV,LinearRegression
from sklearn.model_selection import train_test_split
import statsmodels.api as sm
import matplotlib.pyplot as plt
import seaborn as sns

df = pd.read_csv("C:\\Users\\MSI\\Downloads\\Admission_Prediction.csv")
df['GRE Score'] = df['GRE Score'].fillna(df['GRE Score'].mean())
df['TOEFL Score'] = df['TOEFL Score'].fillna(df['TOEFL Score'].mean())
df['University Rating'] = df['University Rating'].fillna(df['University Rating'].mean())

df.drop(columns="Serial No.",inplace=True)

y = df['Chance of Admit']
x= df.drop(columns="Chance of Admit")




from statsmodels.stats.outliers_influence import variance_inflation_factor
vif_df=pd.DataFrame()


vif_df['vif']=[variance_inflation_factor(x,i) for i in range(len(x.columns))]
vif_df['features']=x.columns
vif_df



x_train,x_test,y_train,y_test=train_test_split(x,y,test_size=0.25,random_state=345)
sc = StandardScaler()
sc.fit(x_train)
x_train = sc.transform(x_train)
x_test= sc.transform(x_test)
lr = LinearRegression()
lr.fit(x_train,y_train)

lr.predict([[1.84274116, 1.78854223, 0.77890565, 1.13735981, 1.09894429,
        1.77680627, 0.88640526]])


pickle.dump(lr, open("model1.pkl", "wb"))
pickle.dump(sc,open("scaler1.pkl","wb"))