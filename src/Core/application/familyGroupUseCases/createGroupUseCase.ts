import { FamilyGroup } from "@/Core/domain/model/FamilyGroup";
import { FamilyGroupRepository } from "@/Core/domain/repository/FamiltyGroupRepository";

export class CreateGroupUseCase {
    constructor(private readonly repository: FamilyGroupRepository) { }

    execute(familyGroup: FamilyGroup): Promise<void> {
        return this.repository.createGroup(familyGroup)
    }
}