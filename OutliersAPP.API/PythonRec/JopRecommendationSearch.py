
#!/usr/bin/env python
# coding: utf-8

# In[44]:

get_ipython().magic(u'matplotlib inline')
import matplotlib.pyplot as plt
import seaborn as sns
import pandas as pd
import numpy as np
import ast
from scipy import stats
from ast import literal_eval
from sklearn.feature_extraction.text import TfidfVectorizer, CountVectorizer
from sklearn.metrics.pairwise import linear_kernel, cosine_similarity
import sys
import json
# from nltk.stem.snowball import SnowballStemmer
# from nltk.stem.wordnet import WordNetLemmatizer
# from nltk.corpus import wordnet
# from surprise import Reader, Dataset, SVD, evaluate

import warnings; warnings.simplefilter('ignore')


# In[45]:


import sqlite3

query = sys.argv[1] if len(sys.argv) > 1 else 'php'

#query=len(sys.argv)>1?sys.argv[1]:"php"

# Create a SQL connection to our SQLite database D:\\matrial 2d\\GP\\final project\\Outliers\\OutliersAPP.API\\OutliersAPP.db
con = sqlite3.connect("D:\matrial 2d\GP\APP\Outliers\OutliersAPP.API\OutliersAPP.db")

cur = con.cursor()
import pandas as pd
df = pd.read_sql_query("SELECT * FROM Job ", con)
# The result of a "cursor.execute" can be iterated over by row
#for row in cur.execute('SELECT * FROM Job'):
    # print(row)

# Be sure to close the connection
con.close()


# In[46]:



#import pandas as pd
#import sqlite3

 #Read sqlite query results into a pandas DataFrame
#con = sqlite3.connect("..\\OutliersAPP.db")
#df = pd.read_sql_query("SELECT * FROM Job ", con)

# Verify that result of SQL query is stored in the dataframe
# print(df.head())

#con.close()


# In[47]:


jobs_base_line = df


# In[48]:


jobs_base_line['JobTitle'] = jobs_base_line['JobTitle'].fillna('')
jobs_base_line['JobDescription'] = jobs_base_line['JobDescription'].fillna('')


jobs_base_line['JobDescription'] = jobs_base_line['JobTitle'] + jobs_base_line['JobDescription']
jobs_base_line.head(20000)


# In[49]:


tf = TfidfVectorizer(analyzer='word',ngram_range=(1, 2),min_df=0, stop_words='english')
tfidf_matrix = tf.fit_transform(jobs_base_line['JobDescription'])


# In[50]:


tfidf_matrix.shape


# In[51]:



cosine_sim = linear_kernel(tfidf_matrix, tfidf_matrix)


# In[52]:


cosine_sim


# In[53]:


jobs_base_line = jobs_base_line.reset_index()
titles = jobs_base_line['JobTitle']
indices = pd.Series(jobs_base_line.index, index=jobs_base_line['JobTitle'])
indices.head(2)


# In[54]:


def get_recommendations(title):
    idx = indices[title]
    #print (idx)
    sim_scores = list(enumerate(cosine_sim[idx]))
    #print (sim_scores)
    sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)
    job_indices = [i[0] for i in sim_scores]
    return titles.iloc[job_indices]


# In[55]:


from pandas import DataFrame
#df = DataFrame(jobs_base_line.loc[jobs_base_line['JobTitle'].isin(get_recommendations("game devolper").head(2))] ,columns=['Id','UserId','JobTitle','ExperienceNeeded','Salary','JobType','JobRequirements','CareerLevel','Vacancies','JobDescription','City','Country','Created','JobRole'])


# In[62]:


#df


# In[63]:


jobs_base_line


# In[66]:


recommendations=get_recommendations(query)


# In[67]:


recommendations_df=recommendations.to_frame()


# In[69]:


recommendations_df


# In[70]:


inputMoviess = pd.merge(recommendations_df, jobs_base_line, sort=False);


# In[71]:


inputMoviess


# In[ ]:





# In[56]:


#get_recommendations("game devolper")


# In[57]:


#df.to_json(orient = "records")


# In[58]:


#df.to_json (r'C:\Users\Eng-Ahmed Hussen\Desktop\dw\File Namejop.json',orient='records')


# In[72]:


print(inputMoviess.to_json(orient = "records"))


# In[60]:


#df


# In[61]:


#print(json.dumps(df))


# In[ ]:





# In[ ]:





# In[ ]:





# In[ ]:





# In[ ]:





# In[ ]:





# In[ ]:





# In[ ]:





# In[ ]:





# In[ ]:






