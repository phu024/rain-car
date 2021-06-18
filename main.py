sel1 = 0
rows: List[number] = []
dt: List[number] = []
t: List[number] = []
mode = 0
def change_display(sel: number):
    global sel1
    sel1 = sel
    for index in range(5):
        rows.append(4)
        dt.append(500)
        t.append(input.running_time())
    if sel == 1:
        rain()
    elif sel == 2:
        car()
def car():
    for index2 in range(5):
        if input.running_time() - t[index2] >= dt[index2]:
            led.unplot(rows[index2], index2)
            t[index2] = input.running_time()
            rows[index2] = rows[index2] + 1
            if rows[index2] == 5:
                rows[index2] = randint(-1, -5)
                dt[index2] = randint(50, 150)
            led.plot(rows[index2], index2)

def on_button_pressed_a():
    global mode
    mode = 1
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global mode
    mode = 2
input.on_button_pressed(Button.B, on_button_pressed_b)

def rain():
    for index4 in range(5):
        if input.running_time() - t[index4] >= dt[index4]:
            led.unplot(index4, rows[index4])
            t[index4] = input.running_time()
            rows[index4] = rows[index4] + 1
            if rows[index4] == 5:
                rows[index4] = randint(-1, -5)
                dt[index4] = randint(50, 150)
            led.plot(index4, rows[index4])

def on_forever():
    change_display(mode)
basic.forever(on_forever)
