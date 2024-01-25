#
# Python:  3.6.4
#
# Author:  Chyanne G Pilgreen
#
# Purpose: The Tech Academy - Python Course, Creating our first program together,
#          Demonstrating how to pass variable from function to function
#          While producing a functional game.
#
#          Remember, function_name(variable) _means that we pass in the variable.
#          return variable_means that we are returning the variable to
#          back to the calling function.



def start(nice=0,mean=0,name=""):
    # get users name
    name = describe_game(name)
    nice,mean,name = nice_mean(nice,mean,name)

def describe_game(name):
    """
       check if this is a new game or not
       if it is new,get the users name
       if it is not a new game, thank the player
    """
    # meaning , if we do not already have this users name,
    # then they are a new player and we need to get their name
    if name != "":
        print("\nThank you for playing again, {}!".format(name))
    else:
        stop = True
        while stop:
            if name == "":
                name = input("\nWhat is your name?\n>>>").capitalize()
                if name != "":
                        print("\nWelcome, {}!".format(name))
                        print("\nIn this game, you will be greeted \nby several different people.\nyou can choose to be nice or mean")
                        print("but at the end of the game your fate\nwill be sealed by your actions.")
            
                        stop = False

        return name


def nice_mean(nice,mean,name):
    stop = True
    while stop:
        show_score(nice,mean,name)
        pick = input("\nA stranger approaches you for a \nconversation. Will you be nice \nor mean? (N/M) \n>>>!").lower()
        if pick == "n":
            print("\nThe stranger walks away smiling...")
            nice = (nice + 1)
            stop = False
        if pick == "m":
            print ("\nThe stranger glares at you \nmenacingly and storms off...")
            mean = (mean + 1)
            stop = False
    score(nice,mean,name) # pass the 3 variables to the score()

def show_score(nice,mean,name):
    print ("\n{}, your current total: \n({}, Nice) and ({}, Mean)".format(name,nice,mean))



def score(nice,mean,name):
    # score function is being passed the values
    if nice > 2: # if condition is valid, call win function passing in the variables so it can use them
        win(nice,mean,name)
    if mean > 2: # if condition is valid, call lose function passing in the variables so it can use them
        lose(nice,mean,name)
    else:        # else, call nice_mean function passing in the variable so it can use them
        nice_mean(nice,mean,name)



def win(nice,mean,name):
    # substitue the () wildcards with our variable value
    print("\nNice job {}, you win \nyou are and upstanding memeber of society \npeople adore you!".format(name))
    # call again function and pass in our variables
    again(nice,mean,name)



def lose(nice,mean,name):
    #substitue the () wildcards with our variable values
    print("\nAhh too bad, game over! \n{}, you are never aloud to eat your favorite food again \nlive in a van by the dumpster, dirty and hungry!".format(name))
    # call again function and play and pass in our variables
    again(nice,mean,name)


def again(nice,mean,name):
    stop = True
    while stop:
        choice = input("\nDo you want to play again? (y/n):\n>>> ").lower()
        if choice == "y":
            stop = False
            reset(nice,mean,name)
        if choice == "n":
            print("\nOh, bummer, how unfortunate to see you go !")
            stop = False
            quit()
        else:
            print("\nEnter { Y } for 'YES', ( N ) for 'NO':\n>>> ")


def reset(nice,mean,name):
    nice = 0
    mean = 0
    start(nice,mean,name)
            
















if __name__ == "__main__":
    start()
