import { Report } from "@/Core/Reports/domain/model/Report";
import { ReportRepository } from "@/Core/Reports/domain/repository/ReportRepository";

export class GetAllUseCase{
    constructor(private readonly repository: ReportRepository){}
    async execute():Promise<Report[]>{
        return await this.repository.getAll();
    }
}