import { ReportRepository } from "../../domain/repository/ReportRepository";
import { TotalAttendance } from "../dtos/TotalAttendance";

export class GetTotalWeekAttendanceUseCase {
    constructor(private readonly repository: ReportRepository) { }
    
    async execute(initialDate:Date, finalDate:Date): Promise<TotalAttendance[]> {
        const reports = await this.repository.getByPeriod(initialDate,finalDate)
        const totalList = reports.map(report=> new TotalAttendance(report.familyGroup, report.totalAttendance))
        return Promise.resolve(totalList)
    }
}