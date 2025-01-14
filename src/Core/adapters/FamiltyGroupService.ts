import { CreateGroupUseCase } from "../application/familyGroupUseCases/createGroupUseCase";
import { GetAllGroupsUseCase } from "../application/familyGroupUseCases/getAllGroupsUseCase";
import { InMemoryFamiltyGroupRepository } from "../infrastructure/persistance/InMemoryFamilyGroupRepository"

const repository = new InMemoryFamiltyGroupRepository();
export const FamilyGroupService = {
    getAll: new GetAllGroupsUseCase(repository),
    create: new CreateGroupUseCase(repository)
}