dicionarioL = {
    'I': '1', 'l':'1', 'R':'2', 'z':'2', 'E':'3', 'e':'3' , 'A':'4', 'a':'4', 'S':'5', 's':'5', 'G':'6','b':'6', 'T':'7', 't': '7', 'B':'8', 'g':'9', 'O':'0', 'o': '0' 
}


def decifrador(cachorrao):
    teste2 = []
    teste3 = ' '
    for i in cachorrao:
        if i in dicionarioL:
            teste2.append(dicionarioL[i])
        else:
            teste2.append(i)

        teste3= ''.join(teste2)
    return teste3





print(decifrador('I am your father'))