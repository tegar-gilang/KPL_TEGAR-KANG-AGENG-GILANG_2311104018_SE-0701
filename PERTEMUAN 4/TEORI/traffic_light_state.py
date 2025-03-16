from enum import Enum

#Automata => State

class trafficlight(Enum):
    MERAH = "Merah"
    HIJAU = "Hijau"
    KUNING = "Kuning"

#Automata => state atau perubahan transisi

state_trantition = {
    trafficlight.MERAH: trafficlight.HIJAU,
    trafficlight.HIJAU: trafficlight.KUNING,
    trafficlight.KUNING: trafficlight.MERAH,    
}

curren_State = trafficlight.MERAH
next_state = state_trantition[curren_State]
print(next_state)