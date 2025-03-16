from enum import Enum

class JenisKelamin(Enum):
    PRIA = 1
    WANITA = 2

patients = []

def add_patients(name: str, gender: JenisKelamin ):
    if not isinstance(gender, JenisKelamin):
        raise ValueError("Jenis Kelamin harusnya adalah PRIA atau WANITA")
    patients.append({"name": name, "gender": gender.name})

add_patients("Andi", JenisKelamin.PRIA)
add_patients("Siti", JenisKelamin.WANITA)


for patient in patients:
    print(f"{patient['name']} adalah {patient['gender']}")