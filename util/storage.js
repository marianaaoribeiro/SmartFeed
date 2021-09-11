import AsyncStorage from "@react-native-async-storage/async-storage"

const KEY = "USERS"
const KEYTwo = "PETS"
export const getUsers = async () => {
  try {
    const json = await AsyncStorage.getItem(KEY);
    return json != null ? JSON.parse(json) : null;
  } catch (e) {
    throw new Error("Erro ao obter os dados do usuário!");
  }
}

export const setUsers = async (users) => {
  try {
    const json = JSON.stringify(users);
    await AsyncStorage.setItem(KEY, json);
  } catch (e) {
    throw new Error("Erro ao gravar a lista de usuários.");
  }
}

export const getPets = async () => {
  try {
    const json = await AsyncStorage.getItem(KEYTwo);
    return json != null ? JSON.parse(json) : null;
  } catch (e) {
    throw new Error("Erro ao obter os dados do Pet!");
  }
}

export const setPets = async (pets) => {
  try {
    const json = JSON.stringify(pets);
    await AsyncStorage.setItem(KEYTwo, json);
  } catch (e) {
    throw new Error("Erro ao gravar a lista de Pet.");
  }
}