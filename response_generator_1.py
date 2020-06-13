  
def response_generation(s):
    from django.db import connection
    with connection.cursor() as cursor:
        sql_query=("SELECT response from queries_query WHERE intent=%s")
        cursor.execute(sql_query,[s])
        for x in cursor:
            s1=x
        try:
        	s2=''.join(s1)
        except:
        	s2="Sorry, cannot understand the question from provided information."
        	return s2
    return s2
