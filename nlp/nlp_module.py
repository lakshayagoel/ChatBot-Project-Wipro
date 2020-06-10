"""
input: string of question
We have a corpus with various sentences. Then, for a given query sentence,
we want to find the most similar sentence in this corpus.
This script outputs for various queries the top 5 most similar sentences in the corpus.
"""
from sentence_transformers import SentenceTransformer
import scipy.spatial
import string

class nlp_module:
    
    def __init__(self):
        # Find the closest 5 sentences of the corpus for each query sentence based on cosine similarity
        self.closest_n = 5
        self.remove_punct_dict = dict((ord(punct), None) for punct in string.punctuation)
        self.embedder = SentenceTransformer('bert-base-nli-mean-tokens') 
    
        # Corpus with example sentences

        self.questions = self.getData()  #change this for input
        self.corpus = self.questions.lower().translate(self.remove_punct_dict).splitlines()
        self.questions=self.questions.splitlines()
        self.corpus_embeddings = self.embedder.encode(self.corpus)

    #import data
    def getData(self) : 
        f = open("./myqs.txt", "r")
        data = f.read()
        return data

    def respond(self,query):
        query.lower().translate(self.remove_punct_dict)
        query_embedding=self.embedder.encode([query])[0]
        distances = scipy.spatial.distance.cdist([query_embedding], self.corpus_embeddings, "cosine")[0]
        results = zip(range(len(distances)), distances)
        results = sorted(results, key=lambda x: x[1])

        #print("\n\n======================\n\n")
        #print("Query:", query)
        #print("\nTop 5 most similar sentences in corpus:")

        #for idx, distance in results[0:self.closest_n]:
            #print(self.corpus[idx].strip(), "(Score: %.4f)" % (1-distance))
        return self.questions[results[0][0]];
