
export class Report {
    familyGroup: FamilyGroup | null;
    activeMember: string;
    noActiveMember: string;
    visitors: string;
    visitedHomes: string;
    totalAttendance: string;
    newChristians: string;
    meetingDate: Date;
    creationDate: Date;
    createdBy: String;

    constructor(familyGroup: FamilyGroup|null, activeMember: string, noActiveMember: string, newChristians: string, visitors: string, visitedHomes: string, totalAttendance: string, meetingDate: Date, creationDate: Date, createdBy: string) {
        this.familyGroup = familyGroup;
        this.meetingDate = meetingDate;
        this.newChristians = newChristians;
        this.visitors = visitors;
        this.visitedHomes = visitedHomes
        this.activeMember = activeMember;
        this.noActiveMember = noActiveMember;
        this.totalAttendance = totalAttendance
        this.creationDate = creationDate;
        this.createdBy = createdBy;
    }

}
export class FamilyGroup {
    constructor(
        readonly name:string,
        readonly color:string
    ){}
}