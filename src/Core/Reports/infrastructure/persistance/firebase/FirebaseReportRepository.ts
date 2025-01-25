import { Report } from "@/Core/Reports/domain/model/Report";
import { ReportRepository } from "@/Core/Reports/domain/repository/ReportRepository";
import { firebaseApp } from "../../../../Shared/utils/firebaseconfig";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore/lite";

const database = firebaseApp;

export class FirebaseReportRepository implements ReportRepository {

    private readonly collection = collection(database, "Reports")

    async create(report: Report): Promise<void> {
        const reportData = {
            ...report,
            familyGroup: {
                name: report.familyGroup?.name || "",
                color: report.familyGroup?.color || ""
            }
        };
        const newReport = await addDoc(this.collection, reportData);
        console.log("new Report created", newReport)
        return Promise.resolve()
    }

    async getAll(): Promise<Report[]> {

        const reports = await getDocs(this.collection);
        const reportList = reports.docs.map((doc) => doc.data())
        const convertedList = reportList.map((report) => new Report(
            report.familyGroup,
            report.activeMember,
            report.noActiveMember,
            '',
            '',
            '',
            report.total,
            new Date(report.meetingDate.seconds * 1000),
            report.creationDate,
            report.createdBy
        ))
        console.log(convertedList)
        return Promise.resolve(convertedList)
    }

    async getByPeriod(initialDate:Date, finalDate: Date): Promise<Report[]> {
        // const { startOfWeek, endOfWeek } = this.getStartEndWeek()
        const customeQuery = query(this.collection, where("meetingDate", ">=", initialDate), where("meetingDate", "<=", finalDate))
        const reports = await getDocs(customeQuery);

        const reportsList = reports.docs.map((doc) => doc.data());
        const convertedList = reportsList.map((report) => new Report(
            report.familyGroup,
            report.activeMember,
            report.noActiveMember,
            report.newChristians,
            report.visitors,
            report.visitedHomes,
            report.total,
            new Date(report.meetingDate.seconds * 1000),
            report.creationDate,
            report.createdBy
        ))
        return Promise.resolve(convertedList)
    }
    getStartEndWeek() {
        const now = new Date();

        // Calcular el inicio de la semana (lunes)
        const startOfWeek = new Date(now);
        startOfWeek.setDate(now.getDate() - now.getDay() + 1); // Ajusta el primer día de la semana (lunes)
        startOfWeek.setHours(0, 0, 0, 0);

        // Calcular el fin de la semana (domingo)
        const endOfWeek = new Date(startOfWeek);
        endOfWeek.setDate(startOfWeek.getDate() + 6); // Domingo
        endOfWeek.setHours(23, 59, 59, 999);
        return { startOfWeek, endOfWeek }
    }
}