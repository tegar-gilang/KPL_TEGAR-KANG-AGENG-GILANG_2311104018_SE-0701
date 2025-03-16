from enum import Enum

class studentStatusState(Enum):
    TERDAFTAR = "Terdaftar"
    CUTI = "Cuti"
    AKTIF = "Aktif"
    LULUS = "Lulus"

class TriggerInputState(Enum):
    CETAK_KSM = "Cetak KSM"
    MENYELESAIKAN_CUTI = "Menyelesaikan Cuti"
    LULUS = "Lulus"
    MENGAJUKAN_CUTI = "Mengajukan Cuti"

state_trantition = {
    studentStatusState.TERDAFTAR:{
        TriggerInputState.CETAK_KSM: studentStatusState.AKTIF,
        TriggerInputState.MENGAJUKAN_CUTI: studentStatusState.CUTI
    },

    studentStatusState.CUTI : {
        TriggerInputState.MENYELESAIKAN_CUTI : studentStatusState.TERDAFTAR
    },

    studentStatusState.AKTIF : {
        TriggerInputState.LULUS: studentStatusState.LULUS,
        TriggerInputState.MENGAJUKAN_CUTI: studentStatusState.CUTI
    }
}

def change_state(current_state, trigger_input):
    cond_1 = current_state in state_trantition
    cond_2 = trigger_input
    if cond_1 and cond_2:
        return state_trantition[current_state][trigger_input]
    return "Transisi Tidak Valid"