export class Report {
    id: string;
    familyGroupId: string;
    activeMember: number;
    noActiveMember: number;
    total: number;
    meetingDate: Date;
    creationDate: Date;
    createdBy: String;

    constructor(id: string, familyGroupId: string, activeMember: number, noActiveMember: number, total: number, meetinDate: Date, creationDate: Date, createdBy: string) {
        this.id = id;
        this.familyGroupId = familyGroupId;
        this.meetingDate = meetinDate;
        this.activeMember = activeMember;
        this.noActiveMember = noActiveMember;
        this.total = total
        this.creationDate = creationDate;
        this.createdBy = createdBy;
    }
}