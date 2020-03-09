var context = new AudioContext()
var o = context.createOscillator()
o.type = "sine"
o.connect(context.destination)
var frequency = 20000.0
o.frequency.value = frequency
o.start()