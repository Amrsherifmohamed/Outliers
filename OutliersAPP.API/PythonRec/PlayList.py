
#!/usr/bin/env python
# coding: utf-8

# In[1459]:



import pandas as pd

from math import sqrt
import numpy as np

import matplotlib.pyplot as plt
get_ipython().magic(u'matplotlib inline')


# In[1460]:



import sqlite3

import sys
query = sys.argv[1] if len(sys.argv) > 1 else 25


# Create a SQL connection to our SQLite database
con = sqlite3.connect("C:\\Users\\smart\\Desktop\\New folder (2)\\Outliers\\OutliersAPP.API\\OutliersAPP.db")

cur = con.cursor()

# The result of a "cursor.execute" can be iterated over by row
#for row in cur.execute('SELECT * FROM Job'):

    # print(row)

# Be sure to close the connection



# In[1461]:


len(sys.argv)


# In[1462]:




import pandas as pd
import sqlite3

# Read sqlite query results into a pandas DataFrame
#con = sqlite3.connect(".\\OutliersAPP.db")
df = pd.read_sql_query("SELECT * FROM PlayLists ", con)


# Verify that result of SQL query is stored in the dataframe
# print(df.head())

#con.close()


# In[1463]:


x=25


# In[ ]:





# In[1464]:


"%query%"


# In[1465]:


# print(query)


# In[1466]:


#inputMovie = inputMovie[inputMovie.id == '23']


# In[1467]:


#inputMovie


# In[1468]:


inputMovie = pd.read_sql_query("SELECT * FROM Rates WHERE id IN(%s)"%query , con)


# In[1469]:


inputMovie


# In[1470]:




movies_df = df

movies_df.head()


# In[1471]:


movies_df['Name'] = movies_df['Name'].apply(lambda x: x.strip())
movies_df.head()


# In[ ]:





# In[1472]:


movies_df['Category'] = movies_df.Category.str.split('|')
movies_df.head()


# In[1473]:



moviesWithGenres_df = movies_df.copy()


for index, row in movies_df.iterrows():
    for genre in row['Category']:
        moviesWithGenres_df.at[index, genre] = 1

moviesWithGenres_df = moviesWithGenres_df.fillna(0)
moviesWithGenres_df.head()



# In[1474]:


inputMovie.head()


# In[1475]:


movies_df


# In[ ]:





# In[1476]:


movies_df['Id'].isin(inputMovie['playlistId'].tolist())


# In[1477]:


inputId = movies_df[movies_df['Id'].isin(inputMovie['playlistId'].tolist())]


# In[ ]:





# In[1478]:


inputId


# In[ ]:





# In[1479]:


result = pd.merge(inputMovie, inputId, left_on='playlistId', right_on='Id', how='left', sort=False);


# In[1480]:


inputMovie


# In[1481]:


inputId


# In[1482]:


inputMoviess = pd.merge(inputMovie, inputId, left_on='playlistId', right_on='Id', how='left', sort=False);


# In[1483]:


inputMoviess


# In[ ]:





# In[1484]:


inputId = movies_df[movies_df['Id'].isin(inputMovie['playlistId'].tolist())]

inputMovies = pd.merge(inputMovie, inputId, left_on='playlistId', right_on='Id', how='left', sort=False);
#inputMovies = pd.merge(inputId, inputMovies)
pd.concat([inputMovies,inputId], axis=1, sort=False)

inputMovies = inputMovies.drop('id', 1).drop('Name', 1).drop('Category', 1).drop('UserId_x', 1).drop('Id', 1).drop('Description', 1).drop('UserId_y', 1)


inputMovies


# In[1485]:


userMovies = moviesWithGenres_df[moviesWithGenres_df['Id'].isin(inputMovies['playlistId'].tolist())]
userMovies


# In[1486]:



userMovies = userMovies.reset_index(drop=True)

userGenreTable = userMovies.drop('Id', 1).drop('Name', 1).drop('Category', 1).drop('Description', 1).drop('DateAdded', 1).drop('UserId', 1)
userGenreTable



# In[1487]:


inputMovies['ratevalue']


# In[1488]:


userProfile = userGenreTable.transpose().dot(inputMovies['ratevalue'])

userProfile


# In[1489]:


#نستخرج التصنيفات من مصفوفة الأفلام ونخزنها في dataframe
genreTable = moviesWithGenres_df.set_index(moviesWithGenres_df['Id'])
#نتخلص من كل الخصائص الغير مهمة في الوقت الحالي
genreTable = genreTable.drop('Id', 1).drop('Name', 1).drop('Category', 1).drop('Description', 1).drop('DateAdded', 1).drop('UserId', 1)
genreTable.head()


# In[1490]:


genreTable.shape


# In[1491]:



recommendationTable_df = ((genreTable*userProfile).sum(axis=1))/(userProfile.sum())
recommendationTable_df.head()


# In[1492]:


recommendationTable_df = recommendationTable_df.sort_values(ascending=False)

recommendationTable_df.head()


# In[1493]:


from pandas import DataFrame
#df = DataFrame(recommendationTable_df['Id'].isin(movies_df.head(5).keys())], columns= ['Id'])
#df = DataFrame(movies_df.loc[movies_df['Id'].isin(recommendationTable_df.head(5).keys())], columns= ['Id'])


# In[1494]:


movies_df.loc[movies_df['Id'].isin(recommendationTable_df.head(5).keys())]


# In[1495]:


r=recommendationTable_df.isin(movies_df['Id'].keys())


# In[1496]:


recommendationTable_df.keys()


# In[1497]:


rf=r.to_frame() 


# In[1498]:


#print rff=rf(index=False)


# In[1499]:


# rff


# In[1500]:


md=movies_df.set_index('Id')


# In[1501]:


md


# In[ ]:





# In[1502]:


rf


# In[1503]:


result = rf.join(md, on=['Id'])


# In[1504]:


result


# In[1505]:



result=result.reset_index().set_index(0)


# In[1506]:


#ALTER table `books` ADD INDEX theindex (`date`, `time`);


# In[ ]:





# In[1507]:


#result = result.drop(0, 1)


# In[1508]:


#movies_df['Id'].isin(recommendationTable_df.head(5).keys())


# In[ ]:





# In[1509]:


#movies_df['Id'].isin(recommendationTable_df.head(5).keys())


# In[1510]:


#movies_df.set_index('Id')


# In[1511]:


#df=movies_df.loc[rs]


# In[1512]:


#df


# In[1513]:


print(result.to_json(orient = "records"))


# In[ ]:





# In[ ]:





# In[ ]:





# In[ ]:





# In[ ]:





# In[ ]:





# In[ ]:












