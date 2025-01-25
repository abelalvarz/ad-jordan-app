import { FamilyGroup } from "@/Core/FamilyGroups/domain/model/FamilyGroup";
import { firebaseApp } from "../../Shared/utils/firebaseconfig";
import { addDoc, collection, getDocs } from "firebase/firestore/lite";
import { FamilyGroupRepository } from "../domain/repository/FamiltyGroupRepository";

const database = firebaseApp;
export class FirebaseFamilyGroupRepository implements FamilyGroupRepository {

    collection = collection(database, 'Family_Groups');

    async getAll(): Promise<FamilyGroup[]> {
        const groupShot = await getDocs(this.collection);
        const groupList = groupShot.docs.map(doc => {
            console.log(doc.id)
            return doc.data()
        })
        console.log(groupList)
        const convertedList = groupList.map((item) => {
            console.log(item)
             return new FamilyGroup(item.color, item.name)
        })

        return Promise.resolve(convertedList)
    }
    async createGroup(familyGroup: FamilyGroup): Promise<void> {

        const newDoc = await addDoc(this.collection, familyGroup)
        console.log("documento agregado exitosamente", newDoc)
        return Promise.resolve()
    }

}