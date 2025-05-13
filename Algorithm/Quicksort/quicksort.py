def quicksort (liste): 
    if len(liste)<=1:
        return liste
    pivot =liste[0]
    pgauche = []
    pdroite = []
    for i in range(1,len(liste)):
        if liste[i] <= pivot:
            pgauche.append(liste[i])
        else:
            pdroite.append(liste[i])
    return quicksort(pgauche) + [pivot] + quicksort(pdroite)



saisie = input("Entrez une liste de nombres séparés par des espaces : ")
liste = list(map(int, saisie.split()))


liste_triee = quicksort(liste)

print("Liste triée :", liste_triee)

"""
Quicksort est un algorithme de tri dont la complexité moyenne est en O(n log n),
mais elle peut atteindre O(n²) dans le pire des cas. Le choix du pivot est donc
très important pour éviter cela.
Cependant, Quicksort n'est pas un algorithme stable : il ne conserve pas
nécessairement l'ordre des éléments égaux, ce qui peut poser problème dans
certains contextes.
Malgré cela, il est largement utilisé dans de nombreux algorithmes de tri et
de recherche.
"""