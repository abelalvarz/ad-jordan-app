import { FamilyGroup } from "@/Core/domain/model/FamilyGroup";
import { FamilyGroupRepository } from "@/Core/domain/repository/FamiltyGroupRepository";

export class GetAllGroupsUseCase {
    constructor(private readonly repository: FamilyGroupRepository) { }

    execute(): Promise<FamilyGroup[]> {
        return this.repository.getAll();
    }
}