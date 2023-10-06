# Minha solução é falha ela não aguenta numeros de 10000 para cima por string n aceitar inumeros caracteres
def fat(num):
    teste = 1
    count = 0
    while True:
        teste *= (num * (num-1))
        num -= 2
        if num == 0:
            break
        elif num == 1:
            break
    direitaNum = str(teste)
    for i in direitaNum[::-1]:
        if i != '0':
            break
        count += 1 

    print(count)
    return count

fat(1000)