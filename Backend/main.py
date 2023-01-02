from turtle import Turtle, Screen

def draw_petal(turtle, radius):
    heading = turtle.heading()
    turtle.circle(radius, 60)
    turtle.left(120)
    turtle.circle(radius, 60)
    turtle.setheading(heading)

my_radius = int(input("What is the radius of the flower? "))
my_petals = int(input("How many petals do you want? "))

bob = Turtle()

for _ in range(my_petals):
    draw_petal(bob, my_radius)
    bob.left(360 / my_petals)

bob.hideturtle()

screen = Screen()
screen.exitonclick()