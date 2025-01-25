import { Report } from "@/Core/Reports/domain/model/Report";
import { ReportRepository } from "@/Core/Reports/domain/repository/ReportRepository";

export class CreateReportUseCase {
    constructor(private readonly repository: ReportRepository) { }

    execute(report: Report): Promise<void> {
        return this.repository.create(report);
    }
}